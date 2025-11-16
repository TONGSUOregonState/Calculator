// 自动生成的程序数据
// 包含 138 个程序：138 个 MATLAB 程序和 0 个 C 程序

export const programs = [
  {
    id: 'of',
    title: "of - G10TINPOS\r",
    description: "G10TINPOS\r",
    category: "Optics - Geometrical",
    chapter: '1',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# G10TINPOS

# Positive Lens
# Focal length f is positive, light from left propagating from medium with index 1 to lens
# of refractive index n.
# xo on left of surface (negative)

# Calculation of graph for xi as function of xo over the total range of xo.
# graph for xi as function of xo over the range of xo to the left of f.
# graph for xi as function of xo over the range of xo to the right of f.


f = 10
# image focus: f
# object focus: -f

xo = np.arange(-100.001, 100+0.07, 0.07)
xi = 1/(1/f+1/xo)
fig = plt.figure(1)

plt.subplot(1, 3, 1)

plt.plot(xo,xi)

plt.xlim(-150, 100)
plt.ylim(-500, 200)

plt.xlabel('xo')
plt.legend(['xi(xo)'])
xxo = np.arange(-50.001, -11+0.07, 0.07)
xxi = 1/(1/f+1/xxo)
plt.subplot(1, 3, 2)

plt.plot(xxo,xxi)

plt.xlim(-55, -10)
plt.ylim(0, 100)

plt.xlabel('xxo')
plt.legend(['xxi(xxo)'])
xxxo =np.arange(-9.001, 50+0.07, 0.07)
xxxi = 1/(1/f+1/xxxo)
plt.subplot(1, 3, 3)

plt.plot(xxxo,xxxi)

plt.xlim(-10, 50)
plt.ylim(-100, 50)

plt.xlabel('xxo')
plt.legend(['xxxi(xxxo)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% G10TINPOS

% Positive Lens
% Focal length f is positive, light from left propagating from medium with index 1 to lens
% of refractive index n.
% xo on left of surface (negative)

% Calculation of graph for xi as function of xo over the total range of xo.
% graph for xi as function of xo over the range of xo to the left of f.
% graph for xi as function of xo over the range of xo to the right of f.

function G10TINPOS;
f = 10;
% image focus: f
% object focus: -f

xo = (-100.001:0.07:100);
xi = 1./(1/f+1./xo);

figure(1);
subplot(1,3,1);
plot(xo,xi);
axis([-150 100 -500 200]);
xlabel('xo');
legend('xi(xo)');

xxo = (-50.001:0.07:-11);
xxi = 1./(1/f+1./xxo);

subplot(1,3,2);
plot(xxo,xxi);
axis([-55 -10 0 100]);
xlabel('xxo');
legend('xxi(xxo)');

xxxo =(-9.001:0.07:50);
xxxi = 1./(1/f+1./xxxo);

subplot(1,3,3);
plot(xxxo,xxxi);
axis([-10 50 -100 50]);
xlabel('xxo');
legend('xxxi(xxxo)');

`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'of',
    title: "of - G12TINNEG\r",
    description: "G12TINNEG\r",
    category: "Optics - Geometrical",
    chapter: '1',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# G12TINNEG

# Negative Lens
# Focal length f is negative, light from left propagating from medium with index 1 to lens
# of refractive index n.
# xo on left of surface (negative)

# Calculation of graph for xi as function of xo over the total range of xo.
# graph for xi as function of xo over the range of xo to the left of f.
# graph for xi as function of xo over the range of xo to the right of f.
# graph for xi as function of xo over the range of xo to the right of f.


f = -10
# image focus: -f
# object focus: f

xo = np.arange(-100.001, 100+0.07, 0.07)
xi = 1/(1/f+1/xo)
fig = plt.figure(1)

plt.subplot(1, 3, 1)

plt.plot(xo,xi)

plt.xlim(-150, 100)
plt.ylim(-200, 300)

plt.xlabel('xo')
plt.legend(['xi(xo)'])
xxo = np.arange(-50.001, 9+0.07, 0.07)
xxi = 1/(1/f+1/xxo)
plt.subplot(1, 3, 2)

plt.plot(xxo,xxi)

plt.xlim(-60, 10)
plt.ylim(-20, 60)

plt.xlabel('xxo')
plt.legend(['xxi(xxo)'])
xxxo =np.arange(11.001, 50+0.07, 0.07)
xxxi = 1/(1/f+1/xxxo)
plt.subplot(1, 3, 3)

plt.plot(xxxo,xxxi)

plt.xlim(10, 50)
plt.ylim(-150, 0)

plt.xlabel('xxo')
plt.legend(['xxxi(xxxo)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% G12TINNEG

% Negative Lens
% Focal length f is negative, light from left propagating from medium with index 1 to lens
% of refractive index n.
% xo on left of surface (negative)

% Calculation of graph for xi as function of xo over the total range of xo.
% graph for xi as function of xo over the range of xo to the left of f.
% graph for xi as function of xo over the range of xo to the right of f.
% graph for xi as function of xo over the range of xo to the right of f.

function G12TINNEG;
f = -10;
% image focus: -f
% object focus: f

xo = (-100.001:0.07:100);
xi = 1./(1/f+1./xo);

figure(1);
subplot(1,3,1);
plot(xo,xi);
axis([-150 100 -200 300]);
xlabel('xo');
legend('xi(xo)');

xxo = (-50.001:0.07:9);
xxi = 1./(1/f+1./xxo);

subplot(1,3,2);
plot(xxo,xxi);
axis([-60 10 -20 60]);
xlabel('xxo');
legend('xxi(xxo)');

xxxo =(11.001:0.07:50);
xxxi = 1./(1/f+1./xxxo);

subplot(1,3,3);
plot(xxxo,xxxi);
axis([10 50 -150 0]);
xlabel('xxo');
legend('xxxi(xxxo)');

`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'G14TINFOC',
    title: "G14TINFOC - G14TINFOC\r",
    description: "G14TINFOC\r",
    category: "Optics - Geometrical",
    chapter: '1',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# G14TINFOC
# Focal length 


# 1. Calculation of focal length of thin lens of refractive index n2 in medium with
# refractive index n1.

# R is positive for convex surface, negative for concave surface
r1 = -5;    # First surface
r2 = 5;     # Second surface

n2 = 1;     # Refractive index of lens n2
n1 = 1.5;   # Refractive index of medium n1

f = n1/((n2-n1)/r1+(n1-n2)/r2)  # f = 7.5

# 2. Graph of focal length of thin lens with index n2 depending on
# refractive index of medium n1.

# The radii of curvature are chosen above. The range of n1 is divided into
# lower and higher range because of singularity.

nn2 = 1.5;  # Refractive index of lens nn2
nn1 = (1:0.1:nn2-0.00001);  # Lower range
nnn1 = (nn2+0.1:0.1:4);     # Upper range

ff = 1/((nn2-nn1)/r1+(nn1-nn2)/r2)
fff = 1/((nn2-nnn1)/r1+(nnn1-nn2)/r2)
fig = plt.figure(1)

plt.subplot(1, 2, 1)

plt.plot(nn1,ff)

plt.xlim(1, 1.4)
plt.ylim(-30, 0)

plt.xlabel('nn1')
plt.legend(['ff(nn1)'])
plt.subplot(1, 2, 2)

plt.plot(nnn1,fff)

plt.xlim(1, 4)
plt.ylim(0, 30)

plt.xlabel('nnn1')
plt.legend(['fff(nnn1)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% G14TINFOC
% Focal length 

function G14TINFOC;

% 1. Calculation of focal length of thin lens of refractive index n2 in medium with
% refractive index n1.

% R is positive for convex surface, negative for concave surface
r1 = -5;    % First surface
r2 = 5;     % Second surface

n2 = 1;     % Refractive index of lens n2
n1 = 1.5;   % Refractive index of medium n1

f = n1/((n2-n1)/r1+(n1-n2)/r2)  % f = 7.5

% 2. Graph of focal length of thin lens with index n2 depending on
% refractive index of medium n1.

% The radii of curvature are chosen above. The range of n1 is divided into
% lower and higher range because of singularity.

nn2 = 1.5;  % Refractive index of lens nn2
nn1 = (1:0.1:nn2-0.00001);  % Lower range
nnn1 = (nn2+0.1:0.1:4);     % Upper range

ff = 1./((nn2-nn1)/r1+(nn1-nn2)/r2);
fff = 1./((nn2-nnn1)/r1+(nnn1-nn2)/r2);

figure(1);
subplot(1,2,1);
plot(nn1,ff);
axis([1 1.4 -30 0]);
xlabel('nn1');
legend('ff(nn1)');

subplot(1,2,2);
plot(nnn1,fff);
axis([1 4 0 30]);
xlabel('nnn1');
legend('fff(nnn1)');`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'G1FERMAT',
    title: "G1FERMAT - G1FERMAT\r",
    description: "G1FERMAT\r",
    category: "Optics - Geometrical",
    chapter: '1',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# G1FERMAT
# Fermat's Principle
# Graph of total travel time
# t1 is the time to go from inital position (0,o) to point (xq,y) in medium with
# velocity v1
# t2 is the time to go from inital position (xq,y) to point (xf,yf) in medium with
# velocity v2
# there is a y value for minimum time
xq=20
xf=40
yf=40
y=np.arange(0, 40+1, 1)
# velocity
v1=1
v2=2.5
# v1 and v2 are at the Graph
# time in medium 1
t1=(1/v1)*np.sqrt((xq)**2+(y)**2)
# time in medium 2
t2=(1/v2)*np.sqrt((xf-xq)**2+(yf-y)**2)
T=t1+t2
fig = plt.figure(1)

plt.plot(y,T)

plt.xlim(0, 40)
plt.ylim(35, 55)
;                  # PLOTS LIMITS                    
xlabel('y','Fontsize',12)
plt.legend(['T(y)'])
title('Figure 1','FontSize',12)
# Changing the paramaters v1 and v2 changes the minimum time for total travel



# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% G1FERMAT
% Fermat's Principle
% Graph of total travel time
% t1 is the time to go from inital position (0,o) to point (xq,y) in medium with
% velocity v1
% t2 is the time to go from inital position (xq,y) to point (xf,yf) in medium with
% velocity v2
% there is a y value for minimum time
xq=20;
xf=40;
yf=40;
y=(0:1:40);
% velocity
v1=1;
v2=2.5;
% v1 and v2 are at the Graph
% time in medium 1
t1=(1/v1)*sqrt((xq)^2+(y).^2);
% time in medium 2
t2=(1/v2)*sqrt((xf-xq)^2+(yf-y).^2);
T=t1+t2;

figure(1);
plot(y,T);
axis([0 40 35 55]);                  % PLOTS LIMITS                    
xlabel('y','Fontsize',12);
legend('T(y)');
title('Figure 1','FontSize',12);

% Changing the paramaters v1 and v2 changes the minimum time for total travel


`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'G2FERMAT',
    title: "G2FERMAT - G2FERMAT\r",
    description: "G2FERMAT\r",
    category: "Optics - Geometrical",
    chapter: '1',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64
from mpl_toolkits.mplot3d import Axes3D

# G2FERMAT

# FERMAT's PRINCIPLE

# t is the time to go from the initial position (0,0) to point (xq,q) with velocity v1
# tt is the tiime to go from point (xq,q) to point (xp,p) with velocity v2
# ttt is the time to go from point (xp,p) to the final position (xf,yf) with velocity v3
# There is a q and p value for minimum time


N = 20
i = (0:1:N)
k = (0:1:N)
q = i
p = k
xq = 20
xp = 40
xf = 60
yf = 60
v1 = 14
v2 = 21
v3 = 52
t = np.sqrt((xq)**2+(q)**2)/v1
for r in range(len(q)):
    for c in range(len(p)):
        tt(r,c) = np.sqrt((xp-xq)**2+(p(c)-q(r))**2)/v2
ttt = np.sqrt((xf-xq)**2+(yf-p)**2)/v3
for r in range(len(q)):
    for c in range(len(p)):
        T(c,r) = tt(r)+tt(r,c) + ttt(c)
M =T
fig = plt.figure(1)

plt.subplot(1, 2, 1)

plt.contour(M)
plt.subplot(1, 2, 2)

ax = plt.gca()
if not hasattr(ax, 'plot_surface'):
    fig = plt.figure()
    ax = fig.add_subplot(111, projection='3d')
    X, Y = np.meshgrid(np.arange(M.shape[1]), np.arange(M.shape[0]))
    ax.plot_surface(X, Y, M, cmap='viridis')

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% G2FERMAT

% FERMAT's PRINCIPLE

% t is the time to go from the initial position (0,0) to point (xq,q) with velocity v1
% tt is the tiime to go from point (xq,q) to point (xp,p) with velocity v2
% ttt is the time to go from point (xp,p) to the final position (xf,yf) with velocity v3
% There is a q and p value for minimum time

function G2FERMAT;
N = 20;
i = (0:1:N);
k = (0:1:N);
q = i;
p = k;
xq = 20;
xp = 40;
xf = 60;
yf = 60;
v1 = 14;
v2 = 21;
v3 = 52;

t = sqrt((xq)^2+(q).^2)/v1;
for r=1:length(q);
    for c=1:length(p);
        tt(r,c) = sqrt((xp-xq)^2+(p(c)-q(r)).^2)/v2;
    end;
end;
ttt = sqrt((xf-xq)^2+(yf-p).^2)/v3;

for r=1:length(q);
    for c=1:length(p);
        T(c,r) = tt(r)+tt(r,c) + ttt(c);
    end;
end;
M =T;

figure(1);
subplot(1,2,1);
contour(M);
subplot(1,2,2);
mesh(M);



`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'G30MIRCV',
    title: "G30MIRCV - G30MIRCV\r",
    description: "G30MIRCV\r",
    category: "Optics - Geometrical",
    chapter: '1',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# G30MIRCV

# Concave mirror.

# Radius of curvature is neg., xo is on left, is negative.
# To get around the singularity at -xo = f one chooses the increments such that the
# value for the singularity does not appear.


r = -50
xo = -60
xi = 1/(1/(r/2) - 1/xo) # xi = -42.857
m = -xi/xo              # m = -0.714

# Graph
xxo = np.arange(-100, -0.1+0.9, 0.9)
xxi = 1/(1/(r/2)-1/xxo)
fig = plt.figure(1)

plt.plot(xxo,xxi)

plt.xlim(-100, 0)
plt.ylim(-4000, 2000)

plt.xlabel('xxo')
plt.legend(['xxi(xxo)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% G30MIRCV

% Concave mirror.

% Radius of curvature is neg., xo is on left, is negative.
% To get around the singularity at -xo = f one chooses the increments such that the
% value for the singularity does not appear.

function G30MIRCV;
r = -50;
xo = -60;
xi = 1/(1/(r/2) - 1/xo) % xi = -42.857
m = -xi/xo              % m = -0.714

% Graph
xxo = (-100:0.9:-0.1);
xxi = 1./(1/(r/2)-1./xxo);

figure(1);
plot(xxo,xxi);
axis([-100 0 -4000 2000]);
xlabel('xxo');
legend('xxi(xxo)');
`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'G31MIRCX',
    title: "G31MIRCX - G31MIRCV\r",
    description: "G31MIRCV\r",
    category: "Optics - Geometrical",
    chapter: '1',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# G31MIRCV

# Convex mirror.

# Radius of curvature is positive, xo is on left, is negative.
# No singularity. Only virtual images.


r = 50
xo = -10
xi = 1/(1/(r/2) - 1/xo) # xi = 7.143

# Graph
xxo = np.arange(-100, -0.1+0.9, 0.9)
xxi = 1/(1/(r/2)-1/xxo)
fig = plt.figure(1)

plt.plot(xxo,xxi)

plt.xlim(-100, 0)
plt.ylim(0, 20)

plt.xlabel('xxo')
plt.legend(['xxi(xxo)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% G31MIRCV

% Convex mirror.

% Radius of curvature is positive, xo is on left, is negative.
% No singularity. Only virtual images.

function G31MIRCX;
r = 50;
xo = -10;
xi = 1/(1/(r/2) - 1/xo) % xi = 7.143

% Graph
xxo = (-100:0.9:-0.1);
xxi = 1./(1/(r/2)-1./xxo);

figure(1);
plot(xxo,xxi);
axis([-100 0 0 20]);
xlabel('xxo');
legend('xxi(xxo)');
`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'G32RESGG',
    title: "G32RESGG - G32RESGG\r",
    description: "G32RESGG\r",
    category: "Optics - Geometrical",
    chapter: '1',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# G32RESGG
# Calculation of Resonator using g1, g2, and d

r1 = 1
r2 = 1
d = 2
g1 = 1 - d/r1
g2 = 1 - d/r2
Lamda1 = -1 + 2*g1*g2+2*np.sqrt(-g1*g2+(g1**2)*(g2**2))
Lamda2 = -1 + 2*g1*g2-2*np.sqrt(-g1*g2+(g1**2)*(g2**2))
# Lamda1 = 1
# Lamda2 = 1


# we set the product g1g2 = x and plot it over the range from -1 to 2
x = np.arange(-1, 2+0.1, 0.1)
y = np.abs((2*x-1)+np.sqrt((2*x-1)**2-1))-1
yy = np.abs((2*x-1)-np.sqrt((2*x-1)**2-1))-1
fig = plt.figure(1)

plt.subplot(1, 2, 1)

plt.plot(x,y)

plt.xlim(-1, 2)
plt.ylim(-5, 5)

plt.xlabel('x')
plt.legend(['y(x)'])
plt.subplot(1, 2, 2)

plt.plot(x,yy)

plt.xlim(-1, 2)
plt.ylim(-5, 5)

plt.xlabel('x')
plt.legend(['yy(x)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% G32RESGG
% Calculation of Resonator using g1, g2, and d
function G32RESGG;

r1 = 1;
r2 = 1;
d = 2;
g1 = 1 - d/r1;
g2 = 1 - d/r2;

Lamda1 = -1 + 2*g1*g2+2*sqrt(-g1*g2+(g1^2)*(g2^2))
Lamda2 = -1 + 2*g1*g2-2*sqrt(-g1*g2+(g1^2)*(g2^2))
% Lamda1 = 1
% Lamda2 = 1


% we set the product g1g2 = x and plot it over the range from -1 to 2
x = (-1:0.1:2);
y = abs((2*x-1)+sqrt((2*x-1).^2-1))-1;
yy = abs((2*x-1)-sqrt((2*x-1).^2-1))-1;

figure(1);
subplot(1,2,1);
plot(x,y);
axis([-1 2 -5 5]);
xlabel('x');
legend('y(x)');

subplot(1,2,2);
plot(x,yy);
axis([-1 2 -5 5]);
xlabel('x');
legend('yy(x)');
`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'G4PRISM',
    title: "G4PRISM - G4PRISM\r",
    description: "G4PRISM\r",
    category: "Optics - Geometrical",
    chapter: '1',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# G4PRISM

# Graph of the angle of deviation for refraction on a prism
# depending on the angle of incidence

# ?1 is the angle of incidence with respect to the normal
# ?1 is the angle of deviation
# n is the refractive index and A is the apex angle.


Theta1 = np.arange(0, 1+0.001, 0.001)
n = 2
A = ((2*np.pi)/360)*30
Delta = Theta1+ asin(np.sqrt(n**2-(np.sin(Theta1))**2)*np.sin(A)-np.sin(Theta1)*np.cos(A))-A
fig = plt.figure(1)

plt.plot(Theta1,Delta)

plt.xlim(0, 1)
plt.ylim(0.4, 1.2)

plt.xlabel('\theta1')
plt.legend(['\delta(\theta1)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% G4PRISM

% Graph of the angle of deviation for refraction on a prism
% depending on the angle of incidence

% ?1 is the angle of incidence with respect to the normal
% ?1 is the angle of deviation
% n is the refractive index and A is the apex angle.

function G4PRISM;
Theta1 = (0:0.001:1);
n = 2;
A = ((2*pi)/360)*30;
Delta = Theta1+ asin(sqrt(n^2-(sin(Theta1)).^2)*sin(A)-sin(Theta1)*cos(A))-A;

figure(1);
plot(Theta1,Delta);
axis([0 1 0.4 1.2]);
xlabel('\theta1');
legend('\delta(\theta1)');`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'of',
    title: "of - G6SINGCX\r",
    description: "G6SINGCX\r",
    category: "Optics - Geometrical",
    chapter: '1',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# G6SINGCX

# Convex single refracting surface
# r is positive, light from left propagating from medium with n1 to medium with n2
# xo on left of surface (negative)

# Calculation of graph for xi as function of xo over the total range of xo.
# graph for xi as function of xo over the range of xo to the left of xof.
# graph for xi as function of xo over the range of xo to the right of xof.


r = 10
n1 = 1
n2 = 1.5
# image focus
xif = n2*(r/(n2-n1))    # xif = 30;:
# object focus
xof = n1*(r/(n1-n2))    # xof = -20
xo = np.arange(-100.001, 100+0.07, 0.07)
xi = n2/(((n2-n1)/r)+n1/xo)
fig = plt.figure(1)

plt.subplot(1, 3, 1)

plt.plot(xo,xi)

plt.xlim(-150, 100)
plt.ylim(-1500, 1500)

plt.xlabel('xo')
plt.legend(['xi(xo)'])
xxo = np.arange(-100.001, -22+0.07, 0.07)
xxi = n2/(((n2-n1)/r)+n1/xxo)
plt.subplot(1, 3, 2)

plt.plot(xxo,xxi)

plt.xlim(-110, -20)
plt.ylim(0, 300)

plt.xlabel('xxo')
plt.legend(['xxi(xxo)'])
xxxo = np.arange(-15.001, 50+0.07, 0.07)
xxxi = n2/(((n2-n1)/r)+n1/xxxo)
plt.subplot(1, 3, 3)

plt.plot(xxxo,xxxi)

plt.xlim(-20, 50)
plt.ylim(-100, 50)

plt.xlabel('xxxo')
plt.legend(['xxxi(xxxo)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% G6SINGCX

% Convex single refracting surface
% r is positive, light from left propagating from medium with n1 to medium with n2
% xo on left of surface (negative)

% Calculation of graph for xi as function of xo over the total range of xo.
% graph for xi as function of xo over the range of xo to the left of xof.
% graph for xi as function of xo over the range of xo to the right of xof.

function G6SINGCX;
r = 10;
n1 = 1;
n2 = 1.5;
% image focus
xif = n2*(r/(n2-n1))    % xif = 30;
% object focus
xof = n1*(r/(n1-n2))    % xof = -20;

xo = (-100.001:0.07:100);
xi = n2./(((n2-n1)/r)+n1./xo);

figure(1);
subplot(1,3,1);
plot(xo,xi);
axis([-150 100 -1500 1500]);
xlabel('xo');
legend('xi(xo)');

xxo = (-100.001:0.07:-22);
xxi = n2./(((n2-n1)/r)+n1./xxo);


subplot(1,3,2);
plot(xxo,xxi);
axis([-110 -20 0 300]);
xlabel('xxo');
legend('xxi(xxo)');

xxxo = (-15.001:0.07:50);
xxxi = n2./(((n2-n1)/r)+n1./xxxo);


subplot(1,3,3);
plot(xxxo,xxxi);
axis([-20 50 -100 50]);
xlabel('xxxo');
legend('xxxi(xxxo)');`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'of',
    title: "of - G8SINGCV\r",
    description: "G8SINGCV\r",
    category: "Optics - Geometrical",
    chapter: '1',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# G8SINGCV

# Convex single refracting surface
# r is negative, light from left propagating from medium with n1 to medium with n2
# xo on left of surface (negative)

# Calculation of graph for xi as function of xo over the total range of xo.
# graph for xi as function of xo over the range of xo to the left of xof.
# graph for xi as function of xo over the range of xo to the right of xof.


r = -10
n1 = 1
n2 = 1.5
# image focus
xif = n2*(r/(n2-n1))    # xif = -30;:
# object focus
xof = n1*(r/(n1-n2))    # xof = 20
xo = np.arange(-100.001, 100+0.07, 0.07)
xi = n2/(((n2-n1)/r)+n1/xo)
fig = plt.figure(1)

plt.subplot(1, 3, 1)

plt.plot(xo,xi)

plt.xlim(-150, 100)
plt.ylim(-2500, 1000)

plt.xlabel('xo')
plt.legend(['xi(xo)'])
xxo = np.arange(-100.001, 15+0.07, 0.07)
xxi = n2/(((n2-n1)/r)+n1/xxo)
plt.subplot(1, 3, 2)

plt.plot(xxo,xxi)

plt.xlim(-120, 20)
plt.ylim(-50, 100)

plt.xlabel('xxo')
plt.legend(['xxi(xxo)'])
xxxo = np.arange(22.001, 50+0.07, 0.07)
xxxi = n2/(((n2-n1)/r)+n1/xxxo)
plt.subplot(1, 3, 3)

plt.plot(xxxo,xxxi)

plt.xlim(20, 50)
plt.ylim(-400, 0)

plt.xlabel('xxxo')
plt.legend(['xxxi(xxxo)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% G8SINGCV

% Convex single refracting surface
% r is negative, light from left propagating from medium with n1 to medium with n2
% xo on left of surface (negative)

% Calculation of graph for xi as function of xo over the total range of xo.
% graph for xi as function of xo over the range of xo to the left of xof.
% graph for xi as function of xo over the range of xo to the right of xof.

function G8SINGCV;
r = -10;
n1 = 1;
n2 = 1.5;
% image focus
xif = n2*(r/(n2-n1))    % xif = -30;
% object focus
xof = n1*(r/(n1-n2))    % xof = 20;

xo = (-100.001:0.07:100);
xi = n2./(((n2-n1)/r)+n1./xo);

figure(1);
subplot(1,3,1);
plot(xo,xi);
axis([-150 100 -2500 1000]);
xlabel('xo');
legend('xi(xo)');

xxo = (-100.001:0.07:15);
xxi = n2./(((n2-n1)/r)+n1./xxo);

subplot(1,3,2);
plot(xxo,xxi);
axis([-120 20 -50 100]);
xlabel('xxo');
legend('xxi(xxo)');

xxxo = (22.001:0.07:50);
xxxi = n2./(((n2-n1)/r)+n1./xxxo);

subplot(1,3,3);
plot(xxxo,xxxi);
axis([20 50 -400 0]);
xlabel('xxxo');
legend('xxxi(xxxo)');`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'W10BES3DS',
    title: "W10BES3DS - W10BES3DS\r",
    description: "W10BES3DS\r",
    category: "Optics - Wavefront Analysis",
    chapter: '10',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64
from mpl_toolkits.mplot3d import Axes3D

# W10BES3DS
# 1. Rayleigh distance corresponding to "resolution" is determined for two round
# apertures at distance d between them.
# 2. 3D graph of pattern of two round apertures at distance d.

# Radius of apertures is a, coordinate on the observation screen R, wavelength Lamda, and
# distance from aperture to screen is X


# 1. Determination of Rayleigh distance.
Lamda = 0.0005
a = 0.05
d = 24.5
X = 4000
R = np.arange(0, 50+0.1, 0.1)
g1R = (besselj(1,(2*np.pi*a*(R/(X*Lamda))))/(2*np.pi*a*(R/(X*Lamda))))**2
gg1R = (besselj(1,(2*np.pi*a*((R-d)/(X*Lamda))))/(2*np.pi*a*((R-d)/(X*Lamda))))**2
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(R,g1R,R,gg1R)

plt.xlim(0, 50)
plt.ylim(0, 0.25)

plt.xlabel('R')
plt.legend(['g1(R)', 'gg1(R)'])
# 2. 3D Graph Distance d

N = 60
X = 4000
M = zeros(N,N)
for i=0:N
    for j=0:N
        
        xi = (-40) + 2.0001*i
        yj = (-40) + 2.0001*j
        M(i+1,j+1) = g2(xi,yj)+gg2(xi,yj)
plt.subplot(2, 1, 2)

ax = plt.gca()
if not hasattr(ax, 'plot_surface'):
    fig = plt.figure()
    ax = fig.add_subplot(111, projection='3d')
    X, Y = np.meshgrid(np.arange(M.shape[1]), np.arange(M.shape[0]))
    ax.plot_surface(X, Y, M, cmap='viridis')
axis([0 N 0 N 0 0.3])
plt.legend(['M'])



Out = np.sqrt(x**2+y**2)
Out = (besselj(1,(2*np.pi*a*(RR(x,y)/(X*Lamda))))/(2*np.pi*a*(RR(x,y)/(X*Lamda))))**2
Out = (besselj(1,(2*np.pi*a*(RR(x,y-d)/(X*Lamda))))/(2*np.pi*a*(RR(x,y-d)/(X*Lamda))))**2
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% W10BES3DS
% 1. Rayleigh distance corresponding to "resolution" is determined for two round
% apertures at distance d between them.
% 2. 3D graph of pattern of two round apertures at distance d.

% Radius of apertures is a, coordinate on the observation screen R, wavelength Lamda, and
% distance from aperture to screen is X

function W10BES3DS;
global a d X Lamda;
% 1. Determination of Rayleigh distance.
Lamda = 0.0005;
a = 0.05;
d = 24.5;
X = 4000;
R = (0:0.1:50);
g1R = (besselj(1,(2*pi*a*(R/(X*Lamda))))./(2*pi*a*(R/(X*Lamda)))).^2;
gg1R = (besselj(1,(2*pi*a*((R-d)/(X*Lamda))))./(2*pi*a*((R-d)/(X*Lamda)))).^2;

figure(1);
subplot(2,1,1);
plot(R,g1R,R,gg1R);
axis([0 50 0 0.25]);
xlabel('R');
legend('g1(R)','gg1(R)');

% 2. 3D Graph Distance d

N = 60;
X = 4000;
M = zeros(N,N);
for i=0:N
    for j=0:N
        
        xi = (-40) + 2.0001*i;
        yj = (-40) + 2.0001*j;
        M(i+1,j+1) = g2(xi,yj)+gg2(xi,yj);
    end;
end;

subplot(2,1,2);
mesh(M);
axis([0 N 0 N 0 0.3]);
legend('M');


function Out=RR(x,y)
Out = sqrt(x.^2+y.^2);

function Out=g2(x,y)
global a X Lamda;
Out = (besselj(1,(2*pi*a*(RR(x,y)/(X*Lamda))))./(2*pi*a*(RR(x,y)/(X*Lamda)))).^2;

function Out=gg2(x,y)
global a d X Lamda;
Out = (besselj(1,(2*pi*a*(RR(x,y-d)/(X*Lamda))))./(2*pi*a*(RR(x,y-d)/(X*Lamda)))).^2;
`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'W11TWOROJ1Sl',
    title: "W11TWOROJ1Sl - W11TWOROJ1S\r",
    description: "W11TWOROJ1S\r",
    category: "Optics - Wavefront Analysis",
    chapter: '10',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# W11TWOROJ1S

# Imaging: Object of "Two round apertures", at Rayleigh distance
# and round lens, Y is used for R'


# Object
# For choice of f# f/10=f/2a
f = 500
a = 25
Lamda = 0.0005
k = (2*np.pi)/Lamda
Y = np.arange(-0.01, 0.02+0.0001, 0.0001)
# limits of integration
b1 = -0.00025
b2 = 0.00025
b3 = 0.00585
b4 = 0.00635
Io1 = (logical(b2-Y)>=0) - (logical(b1-Y)>=0)
Io2 = (logical(b4-Y)>=0) - (logical(b3-Y)>=0)
Io = Io1 + Io2
# Tol = 0.1
# Image


for ind in range(len(Y)):
    Iim(ind)=quad(@Iimfun,b1,b2,[],[],Y(ind)) +quad(@Iimfun,b3,b4,[],[],Y(ind))
fig = plt.figure(1)

plt.subplot(1, 2, 1)

plt.plot(Y,Io)

plt.xlabel('Y')
plt.legend(['Io(Y)'])
plt.xlim(-0.01, 0.02)
plt.ylim(0, 2)

plt.subplot(1, 2, 2)

plt.plot(Y,Iim)

plt.xlabel('Y')
plt.legend(['Iim(Y)'])
plt.xlim(-0.01, 0.02)
plt.ylim(0, 0.4)

Out = 4*(a**2)*(besselj(1,(k*a*(Y-YY))/f)/(k*a*((Y-YY)/f)))**2
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% W11TWOROJ1S

% Imaging: Object of "Two round apertures", at Rayleigh distance
% and round lens, Y is used for R'

function W11TWOROJ1Sl;
global k a f;
% Object
% For choice of f# f/10=f/2a
f = 500;
a = 25;
Lamda = 0.0005;
k = (2*pi)/Lamda;
Y = (-0.01:0.0001:0.02);
% limits of integration
b1 = -0.00025;
b2 = 0.00025;
b3 = 0.00585;
b4 = 0.00635;



Io1 = (logical(b2-Y)>=0) - (logical(b1-Y)>=0);
Io2 = (logical(b4-Y)>=0) - (logical(b3-Y)>=0);
Io = Io1 + Io2;
% Tol = 0.1;


% Image


for ind=1:length(Y)
    Iim(ind)=quad(@Iimfun,b1,b2,[],[],Y(ind)) +quad(@Iimfun,b3,b4,[],[],Y(ind));    
end;

figure(1);
subplot(1,2,1);
plot(Y,Io);
xlabel('Y');
legend('Io(Y)');
axis([-0.01 0.02 0 2]);
subplot(1,2,2);
plot(Y,Iim);
xlabel('Y');
legend('Iim(Y)');
axis([-0.01 0.02 0 0.4]);



function Out=Iimfun(YY,Y)
global k a f;
Out = 4*(a^2)*(besselj(1,(k*a*(Y-YY))/f)./(k*a*((Y-YY)/f))).^2;

`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'W12TWOROCOHS',
    title: "W12TWOROCOHS - W12TWOROCOHS\r",
    description: "W12TWOROCOHS\r",
    category: "Optics - Wavefront Analysis",
    chapter: '10',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# W12TWOROCOHS

# Imaging with coherent light:
# Two round apertures at Rayleigh distance, and round lens(T is R')


# Object
# For choice of f# f/10=f/2a
f = 500
a = 25
Lamda = 0.0005
k = (2*np.pi)/Lamda
Y = np.arange(-0.01, 0.02+0.00011, 0.00011)
# limits of integration
b1 = -0.00025
b2 = 0.00025
b3 = 0.00585
b4 = 0.00635
# Object Amplitudes:
Iob1 = (logical(b2-Y)>=0) - (logical(b1-Y)>=0)
Iob2 = (logical(b4-Y)>=0) - (logical(b3-Y)>=0)
Iob = Iob1 + Iob2
# Tol = 0.1
# Image


for ind in range(len(Y)):
    Iim(ind)=(quad(@Iimfun,b1,b2,[],[],Y(ind)) +quad(@Iimfun,b3,b4,[],[],Y(ind)))**2
fig = plt.figure(1)

plt.subplot(1, 2, 1)

plt.plot(Y,Iob)

plt.xlabel('Y')
plt.legend(['Io(Y)'])
plt.xlim(-0.01, 0.02)
plt.ylim(0, 2)

plt.subplot(1, 2, 2)

plt.plot(Y,Iim)

plt.xlabel('Y')
plt.legend(['Iim(Y)'])
plt.xlim(-0.01, 0.02)
plt.ylim(0, 1)

Out = 4*(a**2)*(besselj(1,(k*a*(Y-YY))/f)/(k*a*((Y-YY)/f)))
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% W12TWOROCOHS

% Imaging with coherent light:
% Two round apertures at Rayleigh distance, and round lens(T is R')

function W12TWOROCOHS;
global k a f;
% Object
% For choice of f# f/10=f/2a
f = 500;
a = 25;
Lamda = 0.0005;
k = (2*pi)/Lamda;
Y = (-0.01:0.00011:0.02);
% limits of integration
b1 = -0.00025;
b2 = 0.00025;
b3 = 0.00585;
b4 = 0.00635;


% Object Amplitudes:
Iob1 = (logical(b2-Y)>=0) - (logical(b1-Y)>=0);
Iob2 = (logical(b4-Y)>=0) - (logical(b3-Y)>=0);
Iob = Iob1 + Iob2;
% Tol = 0.1;


% Image


for ind=1:length(Y)
    Iim(ind)=(quad(@Iimfun,b1,b2,[],[],Y(ind)) +quad(@Iimfun,b3,b4,[],[],Y(ind))).^2;    
end;

figure(1);
subplot(1,2,1);
plot(Y,Iob);
xlabel('Y');
legend('Io(Y)');
axis([-0.01 0.02 0 2]);
subplot(1,2,2);
plot(Y,Iim);
xlabel('Y');
legend('Iim(Y)');
axis([-0.01 0.02 0 1]);



function Out=Iimfun(YY,Y)
global k a f;
Out = 4*(a^2)*(besselj(1,(k*a*(Y-YY))/f)./(k*a*((Y-YY)/f)));

`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'function',
    title: "function - W13TRANCOHSIS\r",
    description: "W13TRANCOHSIS\r",
    category: "Optics - Wavefront Analysis",
    chapter: '10',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# W13TRANCOHSIS
# Coherent light.
# Fourier transformation of a periodic structure using FT of sinx/x as
# transfer function

# Object: Sum of step functions
i = np.arange(0, 255+1, 1)
b = 2
qq = 14
Lamda = 0.0005
fn = 10
yi = 0
for n=0:qq
    yi = yi + (logical(i-(4*(2*n+1)+2)*b)>=0) - (logical(i-(4*(2*n+1)+4)*b)>=0)
fig = plt.figure(1)

plt.subplot(3, 2, 1)

plt.plot(i,yi)

plt.xlim(0, 300)
plt.ylim(0, 1.5)

plt.xlabel('i')
plt.legend(['yi'])

# FT of the Object y is Omega

Omega = fft(yi)
N = length(Omega)
plt.subplot(3, 2, 2)

plt.plot(i,real(Omega)
/np.sqrt(N))
plt.xlim(0, 255)
plt.ylim(-2, 4)

plt.xlabel('i')
plt.legend(['real(\omega)/sqrt(N)'])
# The transfer function is FT of
# s (and not s squared)

# FT of s is transfer function Tau
Si = 4*(np.sin((np.pi*i)/(fn*Lamda*255))/((np.pi*i)/(fn*Lamda*255)))
Si(1) = 0; # Error correction
Tau = fft(Si)
N = length(Tau)
plt.subplot(3, 2, 3)

plt.plot(i,real(Tau)
/np.sqrt(N))
plt.xlim(0, 300)
plt.ylim(-0.2, 0.1)

plt.xlabel('i')
plt.legend(['real(\tau)/sqrt(N)'])
# Product of FT of object and transform function is the modified FT:Phi
Phi = Tau*Omega
plt.subplot(3, 2, 4)

plt.plot(i,real(Phi)
/N)
plt.xlim(0, 300)
plt.ylim(-0.2, 0.5)

plt.xlabel('i')
plt.legend(['real(\phi)/N'])
# FT(inverse) of the modified FT is the amplitude of the image yy
yy = ifft(Phi/np.sqrt(N))
N2 = length(Phi)
# The image is the absolute value of yy squared
plt.subplot(3, 1, 3)

plt.plot(i,(yy)
**2)
plt.xlim(0, 300)
plt.ylim(0, 0.005)

plt.xlabel('i')
plt.legend(['(yy)^2'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% W13TRANCOHSIS
% Coherent light.
% Fourier transformation of a periodic structure using FT of sinx/x as
% transfer function
function W13TRANCOHSIS;
% Object: Sum of step functions
i = (0:1:255);

b = 2;
qq = 14;
Lamda = 0.0005;
fn = 10;
yi = 0;
for n=0:qq
    yi = yi + (logical(i-(4*(2*n+1)+2)*b)>=0) - (logical(i-(4*(2*n+1)+4)*b)>=0);    
end;

figure(1);
subplot(3,2,1);
plot(i,yi);
axis([0 300 0 1.5]);
xlabel('i');
legend('yi');

% FT of the Object y is Omega

Omega = fft(yi);
N = length(Omega);

subplot(3,2,2);
plot(i,real(Omega)/sqrt(N));
axis([0 255 -2 4]);
xlabel('i');
legend('real(\omega)/sqrt(N)');

% The transfer function is FT of
% s (and not s squared)

% FT of s is transfer function Tau
Si = 4*(sin((pi*i)/(fn*Lamda*255))./((pi*i)/(fn*Lamda*255)));
Si(1) = 0; % Error correction
Tau = fft(Si);
N = length(Tau);

subplot(3,2,3);
plot(i,real(Tau)/sqrt(N));
axis([0 300 -0.2 0.1]);
xlabel('i');
legend('real(\tau)/sqrt(N)');

% Product of FT of object and transform function is the modified FT:Phi
Phi = Tau.*Omega;

subplot(3,2,4);
plot(i,real(Phi)/N);
axis([0 300 -0.2 0.5]);
xlabel('i');
legend('real(\phi)/N');

% FT(inverse) of the modified FT is the amplitude of the image yy
yy = ifft(Phi/sqrt(N));
N2 = length(Phi);

% The image is the absolute value of yy squared
subplot(3,1,3);
plot(i,(yy).^2);
axis([0 300 0 0.005]);
xlabel('i');
legend('(yy)^2');
`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'function',
    title: "function - W14TRANJ1S\r",
    description: "W14TRANJ1S\r",
    category: "Optics - Wavefront Analysis",
    chapter: '10',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# W14TRANJ1S
# Coherent light.
# Fourier transformation of a periodic structure using FT of Bessel as
# transfer function

# Object: Sum of step functions
i = np.arange(0, 255+1, 1)
b = 2
qq = 14
Lamda = 0.0005
fn = 10
yi = 0
for n=0:qq
    yi = yi + (logical(i-(4*(2*n+1)+2)*b)>=0) - (logical(i-(4*(2*n+1)+4)*b)>=0)
fig = plt.figure(1)

plt.subplot(3, 2, 1)

plt.plot(i,yi)

plt.xlim(0, 300)
plt.ylim(0, 1.5)

plt.xlabel('i')
plt.legend(['yi'])

# FT of the Object y is Omega

Omega = fft(yi)
N = length(Omega)
plt.subplot(3, 2, 2)

plt.plot(i,real(Omega)
/np.sqrt(N))
plt.xlim(0, 255)
plt.ylim(-2, 4)

plt.xlabel('i')
plt.legend(['real(\omega)/sqrt(N)'])
# The transfer function is FT of
# s (and not s squared)

# FT of s is transfer function Tau
Si = 4*(besselj(1,(np.pi*i)/(fn*Lamda*255))/((np.pi*i)/(fn*Lamda*255)))
Si(1) = 0; # Error correction
Tau = fft(Si)
N = length(Tau)
plt.subplot(3, 2, 3)

plt.plot(i,real(Tau)
/np.sqrt(N))
plt.xlim(0, 300)
plt.ylim(-0.1, 0.05)

plt.xlabel('i')
plt.legend(['real(\tau)/sqrt(N)'])
# Product of FT of object and transform function is the modified FT:Phi
Phi = Tau*Omega
plt.subplot(3, 2, 4)

plt.plot(i,real(Phi)
/N)
plt.xlim(0, 300)
plt.ylim(-0.2, 0.5)

plt.xlabel('i')
plt.legend(['real(\phi)/N'])
# FT(inverse) of the modified FT is the modified amplitude of the image yy
yy = ifft(Phi/np.sqrt(N))
N2 = length(Phi)
# The image is the absolute value of yy squared
plt.subplot(3, 1, 3)

plt.plot(i,(yy)
**2)
plt.xlim(0, 300)
plt.ylim(0, 0.005)

plt.xlabel('i')
plt.legend(['(yy)^2'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% W14TRANJ1S
% Coherent light.
% Fourier transformation of a periodic structure using FT of Bessel as
% transfer function
function W14TRANJ1S;
% Object: Sum of step functions
i = (0:1:255);

b = 2;
qq = 14;
Lamda = 0.0005;
fn = 10;
yi = 0;
for n=0:qq
    yi = yi + (logical(i-(4*(2*n+1)+2)*b)>=0) - (logical(i-(4*(2*n+1)+4)*b)>=0);    
end;

figure(1);
subplot(3,2,1);
plot(i,yi);
axis([0 300 0 1.5]);
xlabel('i');
legend('yi');

% FT of the Object y is Omega

Omega = fft(yi);
N = length(Omega);

subplot(3,2,2);
plot(i,real(Omega)/sqrt(N));
axis([0 255 -2 4]);
xlabel('i');
legend('real(\omega)/sqrt(N)');

% The transfer function is FT of
% s (and not s squared)

% FT of s is transfer function Tau
Si = 4*(besselj(1,(pi*i)/(fn*Lamda*255))./((pi*i)/(fn*Lamda*255)));
Si(1) = 0; % Error correction
Tau = fft(Si);
N = length(Tau);

subplot(3,2,3);
plot(i,real(Tau)/sqrt(N));
axis([0 300 -0.1 0.05]);
xlabel('i');
legend('real(\tau)/sqrt(N)');

% Product of FT of object and transform function is the modified FT:Phi
Phi = Tau.*Omega;

subplot(3,2,4);
plot(i,real(Phi)/N);
axis([0 300 -0.2 0.5]);
xlabel('i');
legend('real(\phi)/N');

% FT(inverse) of the modified FT is the modified amplitude of the image yy
yy = ifft(Phi/sqrt(N));
N2 = length(Phi);

% The image is the absolute value of yy squared
subplot(3,1,3);
plot(i,(yy).^2);
axis([0 300 0 0.005]);
xlabel('i');
legend('(yy)^2');
`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'fow',
    title: "fow - W15HOGRIBLOHIS\r",
    description: "W15HOGRIBLOHIS\r",
    category: "Optics - Wavefront Analysis",
    chapter: '10',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# W15HOGRIBLOHIS
# The object is a periodic structure. The FT of the object is multiplied
# by a blocking function fow low frequencies.
# The FT(inverse) of (FT of object)*(Blocking Function) is the " new" image.
# The "new" image is compared to the original, that is the FT of (FT of object)
# The blocking function removes certain high frequencies of the FT.

# Object: Sum of step functions
i = np.arange(1, 127+1, 1)
b = 2
qq = 7
Lamda = 0.0005
fn = 10
yi = 0
for n=0:qq
    yi = yi + (logical(i-(4*(2*n+1)+2)*b)>=0) - (logical(i-(4*(2*n+1)+4)*b)>=0)
fig = plt.figure(1)

plt.subplot(2, 2, 1)

plt.plot(i,yi)

plt.xlim(0, 150)
plt.ylim(0, 2)

plt.xlabel('i')
plt.legend(['yi'])

# FT of the Object y is Omega

Omega = fft(yi)
N = length(Omega)
plt.subplot(2, 2, 2)

plt.plot(i,real(Omega)
/np.sqrt(N))
plt.xlim(0, 150)
plt.ylim(-2, 2)

plt.xlabel('i')
plt.legend(['real(\omega)/sqrt(N)'])
# Blocking function y

# Low frequencies may pass
a = 25
Tau = (logical(a-i)>=0)+(logical(-(255-a)+i)>=0)
plt.subplot(2, 2, 3)

plt.plot(i,Tau)

plt.xlim(0, 150)
plt.ylim(0, 2)

plt.xlabel('i')
plt.legend(['\tau'])



# Product of FT of object and blocking function is the modified FT:Phi
Phi = Omega*Tau
plt.subplot(2, 2, 4)

plt.plot(i,real(Phi)
/np.sqrt(N))
plt.xlim(0, 150)
plt.ylim(-1, 2)

plt.xlabel('i')
plt.legend(['real(\phi)/sqrt(N)'])
# The "new" image is the FT(inverse) of the modified FT
y = ifft(Phi)
N2 = length(Phi)
fig = plt.figure(2)

plt.subplot(1, 2, 1)

plt.plot(i,real(y)
)
plt.xlim(0, 150)
plt.ylim(-0.5, 1)

plt.xlabel('i')
plt.legend(['real(y)'])
# For comparison: FT(inverse) of the unmodified FT
plt.title('FT (inverse) of the modified FT')
x = ifft(Omega)
N2 = length(Omega)
plt.subplot(1, 2, 2)

plt.plot(i,real(x)
)
plt.xlim(0, 150)
plt.ylim(-1, 2)

plt.xlabel('i')
plt.legend(['real(x)'])
plt.title('FT (inverse) of the unmodified FT')

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% W15HOGRIBLOHIS
% The object is a periodic structure. The FT of the object is multiplied
% by a blocking function fow low frequencies.
% The FT(inverse) of (FT of object)*(Blocking Function) is the " new" image.
% The "new" image is compared to the original, that is the FT of (FT of object)
% The blocking function removes certain high frequencies of the FT.
function W15HOGRIBLOHIS;
% Object: Sum of step functions
i = (1:1:127);

b = 2;
qq = 7;
Lamda = 0.0005;
fn = 10;
yi = 0;
for n=0:qq
    yi = yi + (logical(i-(4*(2*n+1)+2)*b)>=0) - (logical(i-(4*(2*n+1)+4)*b)>=0);    
end;
figure(1);
subplot(2,2,1);
plot(i,yi);
axis([0 150 0 2]);
xlabel('i');
legend('yi');

% FT of the Object y is Omega

Omega = fft(yi);
N = length(Omega);

subplot(2,2,2);
plot(i,real(Omega)/sqrt(N));
axis([0 150 -2 2]);
xlabel('i');
legend('real(\omega)/sqrt(N)');

% Blocking function y

% Low frequencies may pass
a = 25;
Tau = (logical(a-i)>=0)+(logical(-(255-a)+i)>=0);

subplot(2,2,3);
plot(i,Tau);
axis([0 150 0 2]);
xlabel('i');
legend('\tau');



% Product of FT of object and blocking function is the modified FT:Phi
Phi = Omega.*Tau;

subplot(2,2,4);
plot(i,real(Phi)/sqrt(N));
axis([0 150 -1 2]);
xlabel('i');
legend('real(\phi)/sqrt(N)');

% The "new" image is the FT(inverse) of the modified FT
y = ifft(Phi);
N2 = length(Phi);


figure(2);
subplot(1,2,1);
plot(i,real(y));
axis([0 150 -0.5 1]);
xlabel('i');
legend('real(y)');
% For comparison: FT(inverse) of the unmodified FT
title('FT (inverse) of the modified FT');

x = ifft(Omega);
N2 = length(Omega);
subplot(1,2,2);
plot(i,real(x));
axis([0 150 -1 2]);
xlabel('i');
legend('real(x)');
title('FT (inverse) of the unmodified FT');


`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'for',
    title: "for - W16HOGRIBLOLOS\r",
    description: "W16HOGRIBLOLOS\r",
    category: "Optics - Wavefront Analysis",
    chapter: '10',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# W16HOGRIBLOLOS
# The object is a periodic structure. The FT of the object is multiplied
# by a blocking function for high frequencies.
# The FT(inverse) of (FT of object)*(Blocking Function) is the "new" image.
# The "new" image is compared to the original, that is the FT of (FT of object)
# The blocking function removes certain high frequencies of the FT.

# Object: Sum of step functions
i = np.arange(1, 127+1, 1)
b = 2
qq = 7
Lamda = 0.0005
fn = 10
yi = 0
for n=0:qq
    yi = yi + (logical(i-(4*(2*n+1)+2)*b)>=0) - (logical(i-(4*(2*n+1)+4)*b)>=0)
fig = plt.figure(1)

plt.subplot(2, 2, 1)

plt.plot(i,yi)

plt.xlim(0, 150)
plt.ylim(0, 2)

plt.xlabel('i')
plt.legend(['yi'])

# FT of the Object y is Omega

Omega = fft(yi)
N = length(Omega)
plt.subplot(2, 2, 2)

plt.plot(i,real(Omega)
/np.sqrt(N))
plt.xlim(0, 150)
plt.ylim(-2, 2)

plt.xlabel('i')
plt.legend(['real(\omega)/sqrt(N)'])
# Blocking function y


a = 15
n = 1
Tau = (logical(i-(2*n+2)*a)>=0)-(logical(i-(4+4*n)*a)>=0)
plt.subplot(2, 2, 3)

plt.plot(i,Tau)

plt.xlim(0, 150)
plt.ylim(0, 2)

plt.xlabel('i')
plt.legend(['\tau'])



# Product of FT of object and blocking function is the modified FT:Phi
Phi = Omega*Tau
plt.subplot(2, 2, 4)

plt.plot(i,real(Phi)
/np.sqrt(N))
plt.xlim(0, 150)
plt.ylim(-1, 2)

plt.xlabel('i')
plt.legend(['real(\phi)/sqrt(N)'])
# The "new" image is the FT(inverse) of the modified FT
y = ifft(Phi)
N2 = length(Phi)
fig = plt.figure(2)

plt.subplot(1, 2, 1)

plt.plot(i,real(y)
)
plt.xlim(0, 150)
plt.ylim(-0.5, 1)

plt.xlabel('i')
plt.legend(['Real(y)'])
# For comparison: FT(inverse) of the unmodified FT
plt.title('FT (inverse) of the modified FT')
x = ifft(Omega)
N2 = length(Omega)
plt.subplot(1, 2, 2)

plt.plot(i,real(x)
)
plt.xlim(0, 150)
plt.ylim(-0.5, 1.5)

plt.xlabel('i')
plt.legend(['Real(x)'])
plt.title('FT (inverse) of the unmodified FT')

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% W16HOGRIBLOLOS
% The object is a periodic structure. The FT of the object is multiplied
% by a blocking function for high frequencies.
% The FT(inverse) of (FT of object)*(Blocking Function) is the "new" image.
% The "new" image is compared to the original, that is the FT of (FT of object)
% The blocking function removes certain high frequencies of the FT.
function W16HOGRIBLOLOS;
% Object: Sum of step functions
i = (1:1:127);

b = 2;
qq = 7;
Lamda = 0.0005;
fn = 10;
yi = 0;
for n=0:qq
    yi = yi + (logical(i-(4*(2*n+1)+2)*b)>=0) - (logical(i-(4*(2*n+1)+4)*b)>=0);    
end;
figure(1);
subplot(2,2,1);
plot(i,yi);
axis([0 150 0 2]);
xlabel('i');
legend('yi');

% FT of the Object y is Omega

Omega = fft(yi);
N = length(Omega);

subplot(2,2,2);
plot(i,real(Omega)/sqrt(N));
axis([0 150 -2 2]);
xlabel('i');
legend('real(\omega)/sqrt(N)');
% Blocking function y


a = 15;
n = 1;
Tau = (logical(i-(2*n+2)*a)>=0)-(logical(i-(4+4*n)*a)>=0);

subplot(2,2,3);
plot(i,Tau);
axis([0 150 0 2]);
xlabel('i');
legend('\tau');



% Product of FT of object and blocking function is the modified FT:Phi
Phi = Omega.*Tau;

subplot(2,2,4);
plot(i,real(Phi)/sqrt(N));
axis([0 150 -1 2]);
xlabel('i');
legend('real(\phi)/sqrt(N)');

% The "new" image is the FT(inverse) of the modified FT
y = ifft(Phi);
N2 = length(Phi);


figure(2);
subplot(1,2,1);
plot(i,real(y));
axis([0 150 -0.5 1]);
xlabel('i');
legend('Real(y)');
% For comparison: FT(inverse) of the unmodified FT
title('FT (inverse) of the modified FT');

x = ifft(Omega);
N2 = length(Omega);
subplot(1,2,2);
plot(i,real(x));
axis([0 150 -0.5 1.5]);
xlabel('i');
legend('Real(x)');
title('FT (inverse) of the unmodified FT');


`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'has',
    title: "has - W17HOGRPERS\r",
    description: "W17HOGRPERS\r",
    category: "Optics - Wavefront Analysis",
    chapter: '10',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# W17HOGRPERS
# The object is a periodic structure. The FT of the object is multiplied
# by a blocking function. A blocking function has been chosen for blocking certain
# frequencies such that there are twice as many peaks in the image.

# The FT(inverse) of (FT of object)*(Blocking Function) is the "new" image.
# The "new" image is compared to the original, that is the FT of (FT of object)
# The blocking function removes certain high frequencies of the FT.

# Object: Sum of step functions
i = np.arange(1, 127+1, 1)
b = 2
qq = 7
Lamda = 0.0005
fn = 10
yi = 0
for n=0:qq
    yi = yi + (logical(i-(4*(2*n+1)+2)*b)>=0) - (logical(i-(4*(2*n+1)+4)*b)>=0)
fig = plt.figure(1)

plt.subplot(3, 1, 1)

plt.plot(i,yi)

plt.xlim(0, 150)
plt.ylim(0, 2)

plt.xlabel('i')
plt.legend(['yi'])
# FT of the Object y is Omega

Omega = fft(yi)
N = length(Omega)
plt.subplot(3, 1, 2)

plt.plot(i,real(Omega)
/np.sqrt(N))
plt.xlim(0, 150)
plt.ylim(-2, 2)

plt.xlabel('i')
plt.legend(['real(\omega)/sqrt(N)'])
# Blocking function y

q=5
a=5
Tau = 0
for n=0:q
    
    Tau = Tau + (logical(i-(4*n+2)*a)>=0)-(logical(i-(4*n+4)*a)>=0)
plt.subplot(3, 1, 3)

plt.plot(i,Tau)

plt.xlim(0, 150)
plt.ylim(0, 2)

plt.xlabel('i')
plt.legend(['\tau'])



# Product of FT of object and blocking function is the modified FT:Phi
Phi = Omega*Tau
# The "new" image is the FT(inverse) of the modified FT
yy = ifft(Phi)
N2 = length(Phi)
fig = plt.figure(2)

plt.subplot(1, 2, 1)

plt.plot(i,yy)

plt.xlim(0, 150)
plt.ylim(-1, 2)

plt.xlabel('i')
plt.legend(['yy'])

plt.title('Product: FT (inverse) of object and Blocking Function')
# For comparison: The original object
plt.subplot(1, 2, 2)

plt.plot(i,yi)

plt.xlim(0, 150)
plt.ylim(-0.5, 2)

plt.xlabel('i')
plt.legend(['yi'])
plt.title('The Original Object')

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% W17HOGRPERS
% The object is a periodic structure. The FT of the object is multiplied
% by a blocking function. A blocking function has been chosen for blocking certain
% frequencies such that there are twice as many peaks in the image.

% The FT(inverse) of (FT of object)*(Blocking Function) is the "new" image.
% The "new" image is compared to the original, that is the FT of (FT of object)
% The blocking function removes certain high frequencies of the FT.
function W17HOGRPERS;
% Object: Sum of step functions
i = (1:1:127);

b = 2;
qq = 7;
Lamda = 0.0005;
fn = 10;
yi = 0;
for n=0:qq
    yi = yi + (logical(i-(4*(2*n+1)+2)*b)>=0) - (logical(i-(4*(2*n+1)+4)*b)>=0);    
end;
figure(1);
subplot(3,1,1);
plot(i,yi);
axis([0 150 0 2]);
xlabel('i');
legend('yi');
% FT of the Object y is Omega

Omega = fft(yi);
N = length(Omega);

subplot(3,1,2);
plot(i,real(Omega)/sqrt(N));
axis([0 150 -2 2]);
xlabel('i');
legend('real(\omega)/sqrt(N)');
% Blocking function y

q=5;
a=5;
Tau = 0;
for n=0:q
    
    Tau = Tau + (logical(i-(4*n+2)*a)>=0)-(logical(i-(4*n+4)*a)>=0);
end;
subplot(3,1,3);
plot(i,Tau);
axis([0 150 0 2]);
xlabel('i');
legend('\tau');



% Product of FT of object and blocking function is the modified FT:Phi
Phi = Omega.*Tau;


% The "new" image is the FT(inverse) of the modified FT
yy = ifft(Phi);
N2 = length(Phi);


figure(2);
subplot(1,2,1);
plot(i,yy);
axis([0 150 -1 2]);
xlabel('i');
legend('yy');

title('Product: FT (inverse) of object and Blocking Function');
% For comparison: The original object
subplot(1,2,2);
plot(i,yi);
axis([0 150 -0.5 2]);
xlabel('i');
legend('yi');
title('The Original Object');


`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'W18HOSTEPS',
    title: "W18HOSTEPS - W18HOSTEPS\r",
    description: "W18HOSTEPS\r",
    category: "Optics - Wavefront Analysis",
    chapter: '10',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# W18HOSTEPS

# The object y has a complicated shape. Its FT is the hologram c. It may be
# produced in the focal plane of a lens, using parallel light.

# The illumination of the hologram with parallel light will reproduce the object,
# that is the FT(inverse) of the FT, called here cc.

# We want to study the reproduced object when the information in the hologram
# is only partly used, that is we multiply cc with a filter f.
# We show separately f and the FT of the product of f and cc.

# The width of the filter f may be changed by using various values for "a" and "b",
# corresponding to changing the size of the hologram.

# The Object
A = [33 80 80 50 20 99 160 200]
i = np.arange(0, 255+1, 1)
yi = 0
for n in range(1, 3+1):yi = yi +(-(logical(A(n)-i)>=0))
for n in range(4, 8+1):yi = yi +((logical(A(n)-i)>=0)*((-1)**n))
fig = plt.figure(1)

plt.subplot(3, 2, 1)

plt.plot(i,yi)

plt.xlim(0, 300)
plt.ylim(-2, 2)

plt.xlabel('i')
plt.legend(['yi'])

# The hologram
c = fft(yi)
N = length(c)
k= (0:1:N-1)
j= (0:1:N-1)
plt.subplot(3, 2, 2)

plt.plot(k,real(c)
/np.sqrt(N))
plt.xlim(0, 300)
plt.ylim(-5, 5)

plt.xlabel('k')
plt.legend(['real(c)/sqrt(N)'])
# The FT of the hologram
# The FT of the FT(hologram)

cc = c
yy = ifft(cc)
N = length(cc)
j = (0:1:N-1)
plt.subplot(3, 2, 3)

plt.plot(j, real(yy)
)
plt.xlim(0, 255)
plt.ylim(-4, 2)

plt.xlabel('j')
plt.legend(['real(yy)'])
# The filter
a= 60
b= 60
f = (logical(a-j)>=0) + (logical(j-255+b)>=0)
plt.subplot(3, 2, 4)

plt.plot(j,f)

plt.xlim(0, 300)
plt.ylim(0, 2)

plt.xlabel('j')
plt.legend(['f'])

# The product: hologram x filter
plt.subplot(3, 1, 3)

plt.plot(k,f*real(c)
/np.sqrt(N))
plt.xlim(0, 300)
plt.ylim(-5, 5)

plt.xlabel('k')
plt.legend(['f*real(c)/sqrt(N)'])
# The FT (inverse) of the changed hologram (hologram x filter),
# similar to the object
ccc = c*f
x = ifft(ccc)
N = length(ccc)
fig = plt.figure(2)

plt.subplot(1, 2, 1)

plt.plot(k, real(x)
)
plt.xlim(0, 300)
plt.ylim(-4, 2)

plt.xlabel('k')
plt.title('The FT (inverse) of the changed hologram (hologram x filter)')
plt.subplot(1, 2, 2)

# For comparison: The object.
plt.plot(i, yi)

plt.xlim(0, 300)
plt.ylim(-2, 2)

plt.xlabel('i')
plt.title('The Object')

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% W18HOSTEPS

% The object y has a complicated shape. Its FT is the hologram c. It may be
% produced in the focal plane of a lens, using parallel light.

% The illumination of the hologram with parallel light will reproduce the object,
% that is the FT(inverse) of the FT, called here cc.

% We want to study the reproduced object when the information in the hologram
% is only partly used, that is we multiply cc with a filter f.
% We show separately f and the FT of the product of f and cc.

% The width of the filter f may be changed by using various values for "a" and "b",
% corresponding to changing the size of the hologram.
function W18HOSTEPS;
% The Object
A = [33 80 80 50 20 99 160 200];
i = (0:1:255);
yi = 0;
for n=1:3
    yi = yi +(-(logical(A(n)-i)>=0));
end;
for n=4:8
    yi = yi +((logical(A(n)-i)>=0)*((-1)^n));
end;
figure(1);
subplot(3,2,1);
plot(i,yi);
axis([0 300 -2 2]);
xlabel('i');
legend('yi');

% The hologram
c = fft(yi);
N = length(c);
k= (0:1:N-1);
j= (0:1:N-1);

subplot(3,2,2);
plot(k,real(c)/sqrt(N));
axis([0 300 -5 5]);
xlabel('k');
legend('real(c)/sqrt(N)');

% The FT of the hologram
% The FT of the FT(hologram)

cc = c;
yy = ifft(cc);
N = length(cc);
j = (0:1:N-1);

subplot(3,2,3);
plot(j, real(yy));
axis([0 255 -4 2]);
xlabel('j');
legend('real(yy)');

% The filter
a= 60;
b= 60;
f = (logical(a-j)>=0) + (logical(j-255+b)>=0);

subplot(3,2,4);
plot(j,f);
axis([0 300 0 2]);
xlabel('j');
legend('f');

% The product: hologram x filter
subplot(3,1,3);
plot(k,f.*real(c)/sqrt(N));
axis([0 300 -5 5]);
xlabel('k');
legend('f*real(c)/sqrt(N)');

% The FT (inverse) of the changed hologram (hologram x filter),
% similar to the object
ccc = c.*f;
x = ifft(ccc);
N = length(ccc);

figure(2);

subplot(1,2,1);
plot(k, real(x));
axis([0 300 -4 2]);
xlabel('k');
title('The FT (inverse) of the changed hologram (hologram x filter)');

subplot(1,2,2);
% For comparison: The object.
plot(i, yi);
axis([0 300 -2 2]);
xlabel('i');
title('The Object');
`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'W1FTSERIS',
    title: "W1FTSERIS - W1FTSERIS\r",
    description: "W1FTSERIS\r",
    category: "Optics - Wavefront Analysis",
    chapter: '10',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# W1FTSERIS
# Fourier serie of spatial wavelength ???? for the interval from -1 to 1( shown to 2).
# For N = 0 the only term is a sine wave from -1 to 1, of wavelength ? = 2.
# For N = 1 a sine-term with 1/3 of ? and smaller amplitude is added.
# For N = 2 a term with 1/5 of ? and smaller amplitude, and so on.
# If N is large, we see a perfect step function.
# For smaller N ( in the 20th) we see "Gibb's phenomenon", the corners
# are not round and there is "overshooting". For large N it disappears.

x = np.arange(-1, 1.9+0.01, 0.01)
n = np.arange(0, 200+1, 1)
N = 100
Lamda = 1
# For larger and larger N one can see how more and more
# waves with shorter and shorter wavelength are used to build the step
# function.

g0 = (4*np.sin(np.pi*x*(1/Lamda)))/np.pi
g1 = (4*np.sin(np.pi*x*((2*1+1)/Lamda)))/((2*1+1)*np.pi)
g2 = (4*np.sin(np.pi*x*((2*2+1)/Lamda)))/((2*2+1)*np.pi)
fig = plt.figure(1)

plt.subplot(2, 2, 1)

plt.plot(x,g0,x,g1,x,g2)

plt.xlim(-1, 2)
plt.ylim(-2, 2)

plt.xlabel('x')
plt.legend(['g0(x)', 'g1(x)', 'g2(x)'])
plt.subplot(2, 2, 2)

plt.plot(x,g0+g1+g2)

plt.xlim(-1, 2)
plt.ylim(-2, 2)

plt.xlabel('x')
plt.legend(['g0(x)+g1(x)+g2(x)'])
plt.subplot(2, 1, 2)

plt.plot(x,g(x)
)
plt.xlim(-1, 2)
plt.ylim(-2, 2)

plt.xlabel('x')
plt.legend(['g(x)'])
Out = (2*n+1)/(2*Lamda)
sum = 0
for n=0:N
    sum = sum + (4*np.sin(2*np.pi*x*f(n)))/((2*n+1)*np.pi)
Out = sum
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% W1FTSERIS
% Fourier serie of spatial wavelength ???? for the interval from -1 to 1( shown to 2).
% For N = 0 the only term is a sine wave from -1 to 1, of wavelength ? = 2.
% For N = 1 a sine-term with 1/3 of ? and smaller amplitude is added.
% For N = 2 a term with 1/5 of ? and smaller amplitude, and so on.
% If N is large, we see a perfect step function.
% For smaller N ( in the 20th) we see "Gibb's phenomenon", the corners
% are not round and there is "overshooting". For large N it disappears.
function W1FTSERIS;
global N Lamda;
x = (-1:0.01:1.9);
n = (0:1:200);
N = 100;
Lamda = 1;


% For larger and larger N one can see how more and more
% waves with shorter and shorter wavelength are used to build the step
% function.

g0 = (4*sin(pi*x*(1/Lamda)))/pi;
g1 = (4*sin(pi*x*((2*1+1)/Lamda)))/((2*1+1)*pi);
g2 = (4*sin(pi*x*((2*2+1)/Lamda)))/((2*2+1)*pi);

figure(1);
subplot(2,2,1);
plot(x,g0,x,g1,x,g2);
axis([-1 2 -2 2]);
xlabel('x');
legend('g0(x)','g1(x)','g2(x)');

subplot(2,2,2);
plot(x,g0+g1+g2);
axis([-1 2 -2 2]);
xlabel('x');
legend('g0(x)+g1(x)+g2(x)');

subplot(2,1,2);
plot(x,g(x));
axis([-1 2 -2 2]);
xlabel('x');
legend('g(x)');




function Out=f(n)
global Lamda;
Out = (2*n+1)/(2*Lamda);

function Out=g(x)
global N;
sum = 0;
for n=0:N
    sum = sum + (4*sin(2*pi*x*f(n)))/((2*n+1)*pi);    
end;
Out = sum;
`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'W2FTCFTS',
    title: "W2FTCFTS - W2FTCFTS\r",
    description: "W2FTCFTS\r",
    category: "Optics - Wavefront Analysis",
    chapter: '10',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# W2FTCFTS
# Example of real fft and complex cfft on a real object function.

# 1. The real FT fft
# The Object
i = np.arange(0, 255+1, 1)
A = [33 80 80 50 20 99 160 200]
yi = y(i)
fig = plt.figure(1)

plt.subplot(3, 3, 1)

plt.plot(i,yi)

plt.xlim(0, 300)
plt.ylim(-2, 2)

plt.xlabel('i')
plt.legend(['yi'])

# The real Fourier Transformation
c = fft(yi)
N2 = length(c)
j = (0:1:N2-1)
plt.subplot(3, 3, 2)

plt.plot(j,real(c)
/np.sqrt(N2))
plt.xlim(0, 150)
plt.ylim(-5, 5)

plt.xlabel('j')
plt.legend(['real(c)/sqrt(N2)'])
# The inverse fourier transformation
x = ifft(c)
Nx = length(x)
k = (0:1:Nx-1)
plt.subplot(3, 3, 3)

plt.plot(k,x)

plt.xlim(0, 300)
plt.ylim(-4, 2)

plt.xlabel('k')
plt.legend(['x'])

# We can not use x = fft(c) we get
# the "Error Message"
# c must be real

# 2. The complex Fourier Transformation
# The Object
i = np.arange(0, 255+1, 1)
A = [33 80 80 50 20 99 160 200]
yi = y(i)
plt.subplot(3, 3, 4)

plt.plot(i,yi)

plt.xlim(0, 300)
plt.ylim(-2, 2)

plt.xlabel('i')
plt.legend(['yi'])

# The complex Fourier Transformation
cc = fft(yi)
Ncc = length(cc)
k = (0:1:Ncc-1)
plt.subplot(3, 3, 5)

plt.plot(k,real(cc)
/np.sqrt(Ncc))
plt.xlim(0, 300)
plt.ylim(-5, 5)

plt.xlabel('k')
plt.legend(['real(cc)/sqrt(Ncc)'])
# The inverse Fourier Transformation
xx = ifft(cc)
Nxx = length(xx)
k = (0:1:Nxx-1)
plt.subplot(3, 3, 6)

plt.plot(k,real(xx)
)
plt.xlim(0, 300)
plt.ylim(-4, 2)

plt.xlabel('k')
plt.legend(['real(xx)'])
# 3. Application of cfft the second time, instead of the inverse cifft

xxx = fft(cc/np.sqrt(Ncc))
Nxxx = length(xxx)
f = (0:1:Nxxx - 1)
plt.subplot(3, 3, 8)

plt.plot(f,real(xxx)
/np.sqrt(Nxxx))
plt.xlim(0, 300)
plt.ylim(-4, 2)

plt.xlabel('f')
plt.legend(['real(xxx)/sqrt(Nxxx)'])
for k in range(len(i)):
    
    sum1 = 0
    for n in range(1, 3+1):sum1 = sum1 - (logical(A(n)-i(k))>=0)
    sum2 = 0
    for n in range(4, 8+1):sum2 = sum2 + (logical(A(n)-i(k))>=0)*((-1)**n)
    output(k) = sum1+sum2
Out = output
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% W2FTCFTS
% Example of real fft and complex cfft on a real object function.
function W2FTCFTS;
global A;
% 1. The real FT fft
% The Object
i = (0:1:255);
A = [33 80 80 50 20 99 160 200];
yi = y(i);

figure(1);
subplot(3,3,1);
plot(i,yi);
axis([0 300 -2 2]);
xlabel('i');
legend('yi');

% The real Fourier Transformation
c = fft(yi);
N2 = length(c);
j = (0:1:N2-1);

subplot(3,3,2);
plot(j,real(c)/sqrt(N2));
axis([0 150 -5 5]);
xlabel('j');
legend('real(c)/sqrt(N2)');

% The inverse fourier transformation
x = ifft(c);
Nx = length(x);
k = (0:1:Nx-1);

subplot(3,3,3);
plot(k,x);
axis([0 300 -4 2]);
xlabel('k');
legend('x');

% We can not use x = fft(c) we get
% the "Error Message"
% c must be real

% 2. The complex Fourier Transformation
% The Object
i = (0:1:255);
A = [33 80 80 50 20 99 160 200];
yi = y(i);

subplot(3,3,4);
plot(i,yi);
axis([0 300 -2 2]);
xlabel('i');
legend('yi');

% The complex Fourier Transformation
cc = fft(yi);
Ncc = length(cc);
k = (0:1:Ncc-1);

subplot(3,3,5);
plot(k,real(cc)/sqrt(Ncc));
axis([0 300 -5 5]);
xlabel('k');
legend('real(cc)/sqrt(Ncc)');

% The inverse Fourier Transformation
xx = ifft(cc);
Nxx = length(xx);
k = (0:1:Nxx-1);

subplot(3,3,6);
plot(k,real(xx));
axis([0 300 -4 2]);
xlabel('k');
legend('real(xx)');

% 3. Application of cfft the second time, instead of the inverse cifft

xxx = fft(cc/sqrt(Ncc));
Nxxx = length(xxx);
f = (0:1:Nxxx - 1);

subplot(3,3,8);
plot(f,real(xxx)/sqrt(Nxxx));
axis([0 300 -4 2]);
xlabel('f');
legend('real(xxx)/sqrt(Nxxx)');




function Out=y(i);
global A;
for k=1:length(i)
    
    sum1 = 0;
    for n=1:3
        sum1 = sum1 - (logical(A(n)-i(k))>=0);
    end;
    sum2 = 0;
    for n=4:8
        sum2 = sum2 + (logical(A(n)-i(k))>=0)*((-1)^n);
    end;
    output(k) = sum1+sum2;
end;
Out = output;
`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'W3IMONEBS',
    title: "W3IMONEBS - W3IMONEBS\r",
    description: "W3IMONEBS\r",
    category: "Optics - Wavefront Analysis",
    chapter: '10',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# W3IMONEBS
# Imaging: Object is one bar and a cylindrical lens is used.
# f#10 is f/2a equal 10    a is "radius of cylindrical lens

Y = np.arange(-0.01, 0.01+0.0001, 0.0001)
b1 = -0.002
b2 = 0.002
Lamda = 0.0005
f = 500
a = 25
k = (2*np.pi)/Lamda
# TOL = 0.01
fig = plt.figure(1)

plt.subplot(2, 2, 1)

plt.plot(Y,Iob(Y)
)
plt.xlim(-0.01, 0.01)
plt.ylim(0, 2)

plt.xlabel('Y')
plt.legend(['Iob(Y)'])
plt.subplot(2, 2, 2)

plt.plot(Y,S(Y)
)
plt.xlim(-0.01, 0.01)
plt.ylim(0, 3000)

plt.xlabel('Y')
plt.legend(['S(Y)'])
# Unnormalized
for j in range(len(Y)):
    Iim(j) = quad(@Iimfunct,b1,b2,[],[],Y(j))
plt.subplot(2, 1, 2)

plt.plot(Y,Iim)

plt.xlim(-0.01, 0.01)
plt.ylim(0, 10)

plt.xlabel('Y')
plt.legend(['Iim(Y)'])
Out = (logical(b2-Y)>=0)-(logical(b1-Y)>=0)
Out = 4*(a**2)*((np.sin((k*a*Y)/f))/(k*a*(Y/f)))**2
Out = Iob(YY)*4*(a**2)*((np.sin((k*a*(Y-YY))/f)/(k*a*((Y-YY)/f)))**2)
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% W3IMONEBS
% Imaging: Object is one bar and a cylindrical lens is used.
% f#10 is f/2a equal 10    a is "radius of cylindrical lens
function W3IMONEBS;
global k a f b1 b2;
Y = (-0.01:0.0001:0.01);
b1 = -0.002;
b2 = 0.002;
Lamda = 0.0005;
f = 500;
a = 25;
k = (2*pi)/Lamda;
% TOL = 0.01;

figure(1);
subplot(2,2,1);
plot(Y,Iob(Y));
axis([-0.01 0.01 0 2]);
xlabel('Y');
legend('Iob(Y)');



subplot(2,2,2);
plot(Y,S(Y));
axis([-0.01 0.01 0 3000]);
xlabel('Y');
legend('S(Y)');

% Unnormalized
for j=1:length(Y)
    Iim(j) = quad(@Iimfunct,b1,b2,[],[],Y(j));
end;

subplot(2,1,2);
plot(Y,Iim);
axis([-0.01 0.01 0 10]);
xlabel('Y');
legend('Iim(Y)');

function Out=Iob(Y);
global b1 b2;
Out = (logical(b2-Y)>=0)-(logical(b1-Y)>=0);


function Out=S(Y);
global k a f;
Out = 4*(a^2)*((sin((k*a*Y)/f))./(k*a*(Y/f))).^2;

function Out=Iimfunct(YY,Y)
global k a f;
Out = Iob(YY)*4*(a^2).*((sin((k*a*(Y-YY))/f)./(k*a*((Y-YY)/f))).^2);

`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'W4IMTWOBS',
    title: "W4IMTWOBS - W4IMTWOBS\r",
    description: "W4IMTWOBS\r",
    category: "Optics - Wavefront Analysis",
    chapter: '10',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# W4IMTWOBS
# Imaging: Object is "Two bars" and cylindrical lens is used.
# f/10= f/2a            a is "radius" of cylindrical lens

Y = np.arange(-0.02, 0.02+0.0011, 0.0011)
b1 = -0.008
b2 = -0.005
b3 = 0.005
b4 = 0.008
Lamda = 0.0005
k = (2*np.pi)/Lamda
f = 500
a = 25
Io1= (logical(b2-Y)>=0) -  (logical(b1-Y)>=0)
Io2= (logical(b4-Y)>=0) -  (logical(b3-Y)>=0)
Io = Io1 + Io2
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(Y,Io)

plt.legend(['Io(Y)'])
plt.xlim(-0.02, 0.02)
plt.ylim(0, 2)

plt.xlabel('Y')
for j in range(len(Y)):
    Iim1(j) = quad(@Iimf,b1,b2,[],[],Y(j))
    Iim2(j) = quad(@Iimf,b3,b4,[],[],Y(j))
Iim = Iim1+Iim2
plt.subplot(2, 1, 2)

plt.plot(Y,Iim)

plt.xlim(-0.02, 0.02)
plt.ylim(0, 10)

plt.xlabel('Y')
plt.legend(['Iim(Y)'])
Out = 4*(a**2)*((np.sin((k*a*(Y-YY))/f))/(k*a*((Y-YY)/f)))**2
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% W4IMTWOBS
% Imaging: Object is "Two bars" and cylindrical lens is used.
% f/10= f/2a            a is "radius" of cylindrical lens
function W4IMTWOBS;
global k a f;
Y = (-0.02:0.0011:0.02);
b1 = -0.008;
b2 = -0.005;
b3 = 0.005;
b4 = 0.008;
Lamda = 0.0005;
k = (2*pi)/Lamda;
f = 500;
a = 25;

Io1= (logical(b2-Y)>=0) -  (logical(b1-Y)>=0);
Io2= (logical(b4-Y)>=0) -  (logical(b3-Y)>=0);
Io = Io1 + Io2;

figure(1);
subplot(2,1,1);
plot(Y,Io);
legend('Io(Y)');

axis([-0.02 0.02 0 2]);
xlabel('Y');

for j=1:length(Y)
    Iim1(j) = quad(@Iimf,b1,b2,[],[],Y(j));
    Iim2(j) = quad(@Iimf,b3,b4,[],[],Y(j));
end;
Iim = Iim1+Iim2;

subplot(2,1,2);
plot(Y,Iim);
axis([-0.02 0.02 0 10]);
xlabel('Y');
legend('Iim(Y)');

function Out=Iimf(YY,Y)
global k a f;
Out = 4*(a^2)*((sin((k*a*(Y-YY))/f))./(k*a*((Y-YY)/f))).^2;

`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'W5IMONEROS',
    title: "W5IMONEROS - W5IMONEROS\r",
    description: "W5IMONEROS\r",
    category: "Optics - Wavefront Analysis",
    chapter: '10',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# W5IMONEROS
# Imaging:Object is one round aperture and round lens is
# used
# Object:
# Since we are using circular symmetry, the round aperture is a "bar" in the coordinate X,
# f#10 is f/2a equal 10

Y = np.arange(-0.01, 0.01+0.0001, 0.0001)
# tol = 0.01
b1 = -0.002
b2 = 0.002
Lamda = 0.0005
f = 500
a = 25
k = (2*np.pi)/Lamda
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(Y,Iob(Y)
)
plt.xlim(-0.01, 0.01)
plt.ylim(0, 1.1)

plt.xlabel('Y')
plt.legend(['Iob(Y)'])
# Unnormalized
for j in range(len(Y)):
    Iim(j) = quad(@Iimfunct,b1,b2,[],[],Y(j))
plt.subplot(2, 1, 2)

plt.plot(Y,Iim)

plt.xlim(-0.01, 0.01)
plt.ylim(0, 3)

plt.xlabel('Y')
plt.legend(['Iim(Y)'])
Out = (logical(b2-Y)>=0) - (logical(b1-Y)>=0)
Out = Iob(YY)*4*(a**2)*(besselj(1,((k*a*(Y-YY))/f))/(k*a*((Y-YY)/f)))**2
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% W5IMONEROS
% Imaging:Object is one round aperture and round lens is
% used
% Object:
% Since we are using circular symmetry, the round aperture is a "bar" in the coordinate X,
% f#10 is f/2a equal 10
function W5IMONEROS;
global b1 b2 k a f;
Y = (-0.01:0.0001:0.01);
% tol = 0.01;
b1 = -0.002;
b2 = 0.002;
Lamda = 0.0005;
f = 500;
a = 25;
k = (2*pi)/Lamda;

figure(1);
subplot(2,1,1);
plot(Y,Iob(Y));
axis([-0.01 0.01 0 1.1]);
xlabel('Y');
legend('Iob(Y)');

% Unnormalized
for j=1:length(Y)
    Iim(j) = quad(@Iimfunct,b1,b2,[],[],Y(j));
end;

subplot(2,1,2);
plot(Y,Iim);
axis([-0.01 0.01 0 3]);
xlabel('Y');
legend('Iim(Y)');

function Out=Iob(Y);
global b1 b2;
Out = (logical(b2-Y)>=0) - (logical(b1-Y)>=0);

function Out=Iimfunct(YY,Y)
global k a f;
Out = Iob(YY)*4*(a^2).*(besselj(1,((k*a*(Y-YY))/f))./(k*a*((Y-YY)/f))).^2;

`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'W6IMTWOROS',
    title: "W6IMTWOROS - W6IMTWOROS\r",
    description: "W6IMTWOROS\r",
    category: "Optics - Wavefront Analysis",
    chapter: '10',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# W6IMTWOROS
# Imaging: Two round apertures and a round lens, (R' is X)


Y = np.arange(-0.1, 0.6+0.00111, 0.00111)
b1 = -0.002
b2 = 0.002
b3 = 0.012
b4 = 0.016
# tol = 0.1
# f/10 = f/2a
Lamda = 0.0005
k = (2*np.pi)/Lamda
f = 500
a = 25
Io1= (logical(b2-Y)>=0) -  (logical(b1-Y)>=0)
Io2= (logical(b4-Y)>=0) -  (logical(b3-Y)>=0)
Io = Io1 + Io2
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(Y,Io)

plt.xlim(-0.01, 0.02)
plt.ylim(0, 2)

plt.xlabel('Y')
plt.legend(['Io(Y)'])
for j in range(len(Y)):
    Iim(j) = quad(@Iimf,b1,b2,[],[],Y(j))+ quad(@Iimf,b3,b4,[],[],Y(j))
plt.subplot(2, 1, 2)

plt.plot(Y,Iim)

plt.xlim(-0.01, 0.03)
plt.ylim(0, 3)

plt.xlabel('Y')
plt.legend(['Iim(Y)'])
Out = 4*(a**2)*(besselj(1,((k*a*(Y-YY))/f))/(k*a*((Y-YY)/f)))**2
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% W6IMTWOROS
% Imaging: Two round apertures and a round lens, (R' is X)

function W6IMTWOROS;
global k a f;
Y = (-0.1:0.00111:0.6);
b1 = -0.002;
b2 = 0.002;
b3 = 0.012;
b4 = 0.016;
% tol = 0.1
% f/10 = f/2a
Lamda = 0.0005;
k = (2*pi)/Lamda;
f = 500;
a = 25;

Io1= (logical(b2-Y)>=0) -  (logical(b1-Y)>=0);
Io2= (logical(b4-Y)>=0) -  (logical(b3-Y)>=0);
Io = Io1 + Io2;

figure(1);
subplot(2,1,1);
plot(Y,Io);
axis([-0.01 0.02 0 2]);
xlabel('Y');
legend('Io(Y)');

for j=1:length(Y)
    Iim(j) = quad(@Iimf,b1,b2,[],[],Y(j))+ quad(@Iimf,b3,b4,[],[],Y(j));
end;

subplot(2,1,2);
plot(Y,Iim);
axis([-0.01 0.03 0 3]);
xlabel('Y');
legend('Iim(Y)');

function Out=Iimf(YY,Y)
global k a f;
Out = 4*(a^2).*(besselj(1,((k*a*(Y-YY))/f))./(k*a*((Y-YY)/f))).^2;


`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'W7PUTRAS',
    title: "W7PUTRAS - W7PUTRAS\r",
    description: "W7PUTRAS\r",
    category: "Optics - Wavefront Analysis",
    chapter: '10',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# W7PUTRAS
# Incoherent case, one dimensional.
# Object is a pulse y. Lens is cylindrical with spread function (sinx/x)**2.
# FT of spread Functoin = transfer function.

# The image is FT of ( FT of spread function (transfer function) times FT of object).


# Object: Sum of step functions
k = np.arange(0, 255+1, 1)
b1 = 100
b2 = 140
b = 2
qq = 14
Lamda = 0.0005
fn = 10
yk = (logical(b2-k)>=0)-(logical(b1-k)>=0)
fig = plt.figure(1)

plt.subplot(3, 2, 1)

plt.plot(k,yk)

plt.xlim(0, 300)
plt.ylim(0, 1.5)

plt.xlabel('k')
plt.legend(['yk'])

# FT of the Object y is Omega

Omega = fft(yk)
N = length(Omega)
plt.subplot(3, 2, 2)

plt.plot(k,real(Omega)
/np.sqrt(N))
plt.xlim(0, 255)
plt.ylim(-4, 4)

plt.xlabel('k')
plt.legend(['real(\omega)/sqrt(N)'])
# The spread function is (sinz/z)**2 because of cylindrical lens
# FT of spread function is transfer function Tau
# f# = f/2a = fn
Sk = (np.sin((np.pi*k)/(fn*Lamda*255))/((np.pi*k)/(fn*Lamda*255)))**2
Sk(1)=0; # error correction, division by zero at first element
Tau = fft(Sk)
N = length(Tau)
plt.subplot(3, 2, 3)

plt.plot(k,real(Tau)
/np.sqrt(N))
plt.xlim(0, 300)
plt.ylim(-0.005, 0.01)

plt.xlabel('k')
plt.legend(['real(\tau)/sqrt(N)'])
# Product of FT of object and FT of spread function(transfer function) is Phi
Phi = (Tau*Omega)
plt.subplot(3, 2, 4)

plt.plot(k,real(Phi)
/N)
plt.xlim(0, 300)
plt.ylim(-0.1, 0.1)

plt.xlabel('k')
plt.legend(['real(\phi)/N'])
# Image
# FT (inverse) of the Product of FT of object and FT of transfer function
yy= ifft(Phi/np.sqrt(N))
N2 = length(Phi)
plt.subplot(3, 1, 3)

plt.plot(k,yy)

plt.xlim(0, 300)
plt.ylim(0, 0.02)

plt.xlabel('k')
plt.legend(['yy'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% W7PUTRAS
% Incoherent case, one dimensional.
% Object is a pulse y. Lens is cylindrical with spread function (sinx/x)^2.
% FT of spread Functoin = transfer function.

% The image is FT of ( FT of spread function (transfer function) times FT of object).

function W7PUTRAS;
% Object: Sum of step functions
k = (0:1:255);
b1 = 100;
b2 = 140;
b = 2;
qq = 14;
Lamda = 0.0005;
fn = 10;
yk = (logical(b2-k)>=0)-(logical(b1-k)>=0);

figure(1);
subplot(3,2,1);
plot(k,yk);
axis([0 300 0 1.5]);
xlabel('k');
legend('yk');

% FT of the Object y is Omega

Omega = fft(yk);
N = length(Omega);

subplot(3,2,2);
plot(k,real(Omega)/sqrt(N));
axis([0 255 -4 4]);
xlabel('k');
legend('real(\omega)/sqrt(N)');
% The spread function is (sinz/z)^2 because of cylindrical lens
% FT of spread function is transfer function Tau
% f# = f/2a = fn
Sk = (sin((pi*k)/(fn*Lamda*255))./((pi*k)/(fn*Lamda*255))).^2;
Sk(1)=0; % error correction, division by zero at first element
Tau = fft(Sk);
N = length(Tau);

subplot(3,2,3);
plot(k,real(Tau)/sqrt(N));
axis([0 300 -0.005 0.01]);
xlabel('k');
legend('real(\tau)/sqrt(N)');

% Product of FT of object and FT of spread function(transfer function) is Phi
Phi = (Tau.*Omega);

subplot(3,2,4);
plot(k,real(Phi)/N);
axis([0 300 -0.1 0.1]);
xlabel('k');
legend('real(\phi)/N');
% Image
% FT (inverse) of the Product of FT of object and FT of transfer function
yy= ifft(Phi/sqrt(N));
N2 = length(Phi);

subplot(3,1,3);
plot(k,yy);
axis([0 300 0 0.02]);
xlabel('k');
legend('yy');`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'the',
    title: "the - W8TRASIS\r",
    description: "W8TRASIS\r",
    category: "Optics - Wavefront Analysis",
    chapter: '10',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# W8TRASIS
# Incoherent case, Fourier transformation of a periodic
# structure using as transfer function the sinc function



# Object: Sum of step functions
i = np.arange(0, 255+1, 1)
b = 2
qq = 14
Lamda = 0.0005
fn = 10
yi = 0
for n=0:qq
    yi = yi + (logical(i-(4*(2*n+1)+2)*b)>=0) - (logical(i-(4*(2*n+1)+4)*b)>=0)
fig = plt.figure(1)

plt.subplot(3, 2, 1)

plt.plot(i,yi)

plt.xlim(0, 300)
plt.ylim(0, 1.5)

plt.xlabel('i')
plt.legend(['yi'])

# FT of the Object y is c

Omega = fft(yi)
N = length(Omega)
plt.subplot(3, 2, 2)

plt.plot(i,real(Omega)
/np.sqrt(N))
plt.xlim(0, 255)
plt.ylim(-4, 4)

plt.xlabel('i')
plt.legend(['real(\omega)/sqrt(N)'])
# Ft of spread function is transfer function Tau
# f#=f/2a=fn

Si = 4*(np.sin((np.pi*i)/(fn*Lamda*255))/((np.pi*i)/(fn*Lamda*255)))**2
Si(1)=0; # error correction, division by zero at first element
Tau = fft(Si)
N = length(Tau)
plt.subplot(3, 2, 3)

plt.plot(i,real(Tau)
/np.sqrt(N))
plt.xlim(0, 300)
plt.ylim(-0.01, 0.03)

plt.xlabel('i')
plt.legend(['real(\tau)/sqrt(N)'])
# Product of FT of object and FT of spread function(transfer function) is Phi
Phi = (Tau*Omega)
plt.subplot(3, 2, 4)

plt.plot(i,real(Phi)
/N)
plt.xlim(0, 300)
plt.ylim(-0.2, 0.2)

plt.xlabel('i')
plt.legend(['real(\phi)/N'])
# Image
# FT (inverse) of the Product of FT of object and FT of transfer function
yy= ifft(Phi/np.sqrt(N))
N2 = length(Phi)
plt.subplot(3, 1, 3)

plt.plot(i,yy)

plt.xlim(0, 300)
plt.ylim(0, 0.04)

plt.xlabel('i')
plt.legend(['yy'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% W8TRASIS
% Incoherent case, Fourier transformation of a periodic
% structure using as transfer function the sinc function


function W8TRASIS;
% Object: Sum of step functions
i = (0:1:255);

b = 2;
qq = 14;
Lamda = 0.0005;
fn = 10;
yi = 0;
for n=0:qq
    yi = yi + (logical(i-(4*(2*n+1)+2)*b)>=0) - (logical(i-(4*(2*n+1)+4)*b)>=0);    
end;


figure(1);
subplot(3,2,1);
plot(i,yi);
axis([0 300 0 1.5]);
xlabel('i');
legend('yi');

% FT of the Object y is c

Omega = fft(yi);
N = length(Omega);

subplot(3,2,2);
plot(i,real(Omega)/sqrt(N));
axis([0 255 -4 4]);
xlabel('i');
legend('real(\omega)/sqrt(N)');

% Ft of spread function is transfer function Tau
% f#=f/2a=fn

Si = 4*(sin((pi*i)/(fn*Lamda*255))./((pi*i)/(fn*Lamda*255))).^2;
Si(1)=0; % error correction, division by zero at first element
Tau = fft(Si);
N = length(Tau);

subplot(3,2,3);
plot(i,real(Tau)/sqrt(N));
axis([0 300 -0.01 0.03]);
xlabel('i');
legend('real(\tau)/sqrt(N)');

% Product of FT of object and FT of spread function(transfer function) is Phi
Phi = (Tau.*Omega);

subplot(3,2,4);
plot(i,real(Phi)/N);
axis([0 300 -0.2 0.2]);
xlabel('i');
legend('real(\phi)/N');

% Image
% FT (inverse) of the Product of FT of object and FT of transfer function
yy= ifft(Phi/sqrt(N));
N2 = length(Phi);

subplot(3,1,3);
plot(i,yy);
axis([0 300 0 0.04]);
xlabel('i');
legend('yy');`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'W9TRAJ1S',
    title: "W9TRAJ1S - W9TRAJ1S\r",
    description: "W9TRAJ1S\r",
    category: "Optics - Wavefront Analysis",
    chapter: '10',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# W9TRAJ1S
# Incoherent case, Fourier transformation of a periodic
# structure using as transfer function: Bessel



# Object: Sum of step functions
i = np.arange(0, 255+1, 1)
b = 2
qq = 14
Lamda = 0.0005
fn = 10
yi = 0
for n=0:qq
    yi = yi + (logical(i-(4*(2*n+1)+2)*b)>=0) - (logical(i-(4*(2*n+1)+4)*b)>=0)
fig = plt.figure(1)

plt.subplot(3, 2, 1)

plt.plot(i,yi)

plt.xlim(0, 300)
plt.ylim(0, 1.5)

plt.xlabel('i')
plt.legend(['yi'])

# FT of the Object y is c

Omega = fft(yi)
N = length(Omega)
plt.subplot(3, 2, 2)

plt.plot(i,real(Omega)
/np.sqrt(N))
plt.xlim(0, 255)
plt.ylim(-2, 4)

plt.xlabel('i')
plt.legend(['real(\omega)/sqrt(N)'])
# Ft of spread function is transfer function Tau
# f#=f/2a=fn

Si = 4*(besselj(1,((np.pi*i)/(fn*Lamda*255)))/((np.pi*i)/(fn*Lamda*255)))**2
Si(1)=0; # error correction, division by zero at first element
Tau = fft(Si)
N = length(Tau)
plt.subplot(3, 2, 3)

plt.plot(i,real(Tau)
/np.sqrt(N))
plt.xlim(0, 300)
plt.ylim(-0.01, 0.02)

plt.xlabel('i')
plt.legend(['real(\tau)/sqrt(N)'])
# Product of FT of object and FT of spread function(transfer function) is Phi
Phi = (Tau*Omega)
plt.subplot(3, 2, 4)

plt.plot(i,real(Phi)
/N)
plt.xlim(0, 300)
plt.ylim(-0.02, 0.06)

plt.xlabel('i')
plt.legend(['real(\phi)/N'])
# Image
# FT (inverse) of the Product of FT of object and FT of transfer function
yy= ifft(Phi/np.sqrt(N))
N2 = length(Phi)
plt.subplot(3, 1, 3)

plt.plot(i,yy)

plt.xlim(0, 300)
plt.ylim(0, 0.01)

plt.xlabel('i')
plt.legend(['yy'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% W9TRAJ1S
% Incoherent case, Fourier transformation of a periodic
% structure using as transfer function: Bessel


function W9TRAJ1S;
% Object: Sum of step functions
i = (0:1:255);

b = 2;
qq = 14;
Lamda = 0.0005;
fn = 10;
yi = 0;
for n=0:qq
    yi = yi + (logical(i-(4*(2*n+1)+2)*b)>=0) - (logical(i-(4*(2*n+1)+4)*b)>=0);    
end;


figure(1);
subplot(3,2,1);
plot(i,yi);
axis([0 300 0 1.5]);
xlabel('i');
legend('yi');

% FT of the Object y is c

Omega = fft(yi);
N = length(Omega);

subplot(3,2,2);
plot(i,real(Omega)/sqrt(N));
axis([0 255 -2 4]);
xlabel('i');
legend('real(\omega)/sqrt(N)');

% Ft of spread function is transfer function Tau
% f#=f/2a=fn

Si = 4*(besselj(1,((pi*i)/(fn*Lamda*255)))./((pi*i)/(fn*Lamda*255))).^2;
Si(1)=0; % error correction, division by zero at first element
Tau = fft(Si);
N = length(Tau);

subplot(3,2,3);
plot(i,real(Tau)/sqrt(N));
axis([0 300 -0.01 0.02]);
xlabel('i');
legend('real(\tau)/sqrt(N)');

% Product of FT of object and FT of spread function(transfer function) is Phi
Phi = (Tau.*Omega);

subplot(3,2,4);
plot(i,real(Phi)/N);
axis([0 300 -0.02 0.06]);
xlabel('i');
legend('real(\phi)/N');

% Image
% FT (inverse) of the Product of FT of object and FT of transfer function
yy= ifft(Phi/sqrt(N));
N2 = length(Phi);

subplot(3,1,3);
plot(i,yy);
axis([0 300 0 0.01]);
xlabel('i');
legend('yy');`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'A2SPASSS',
    title: "A2SPASSS - A2SPASSS\r",
    description: "A2SPASSS\r",
    category: "Optics - Aberrations",
    chapter: '11',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# A2SPASSS
# Spherical aberration of a single refracting surface.
# Definiton: Longitudinal spherical Aberration L.S.A. = xi - xiisph
# Calculation of image point xi and corrected image point xiisph
# All lengths in cm.

# 1. Calculation of xi(xo) for negative values of xo
ro = 2
n = 1.5
r = 10
xo = np.arange(-20, -101, -1)
xi = 1 / (((n - 1) / (n * r)) + 1 / (n * xo))

# 2. Calculation of xiisph(xo) depending on xo for the corrected case of L.S.A
xiisph = n / (
    ((n - 1) / r)
    + 1 / xo
    + ((n - 1) / (n ** 2)) * ((ro ** 2) / 2) * (((1 / r - 1 / xo) ** 2) * (1 / r - ((n + 1) / xo)))
)

fig = plt.figure(figsize=(10, 12))

plt.subplot(4, 2, 1)
plt.plot(xo, xi, label='xi(xo)')
plt.plot(xo, xiisph, label='xiisph(xo)')
plt.xlim(-100, 0)
plt.ylim(0, 100)
plt.xlabel('xo')
plt.legend(['xi(xo)', 'xiisph(xo)'])

plt.subplot(4, 2, 2)
plt.plot(xo, xi - xiisph, label='xi - xiisph')
plt.xlim(-100, 0)
plt.ylim(-10, 20)
plt.xlabel('xo')
plt.legend(['xi(xo)-xiisph(xo)'])

# 3. Calculation of xiisph(nn) depending on the refractive index nn
xxo = -30
rr = 10
nn = np.arange(1.4, 4.01, 0.01)
xi = 1 / ((nn - 1) / (nn * rr) + 1 / (nn * xxo))
xiisph = nn / (
    ((nn - 1) / r)
    + 1 / xxo
    + ((nn - 1) / (nn ** 2)) * ((ro ** 2) / 2) * (((1 / r - 1 / xxo) ** 2) * (1 / r - ((nn + 1) / xxo)))
)

plt.subplot(4, 2, 3)
plt.plot(nn, xi, label='xi(nn)')
plt.xlim(1, 4)
plt.ylim(0, 300)
plt.xlabel('nn')
plt.legend(['xi(nn)'])

plt.subplot(4, 2, 4)
plt.plot(nn, xiisph, label='xiisph(nn)')
plt.xlim(1, 4)
plt.ylim(0, 200)
plt.xlabel('nn')
plt.legend(['xiisph(nn)'])

plt.subplot(4, 2, 5)
plt.plot(nn, xi - xiisph, label='xi - xiisph')
plt.xlim(1, 4)
plt.ylim(0, 100)
plt.xlabel('nn')
plt.legend(['xi(nn)-xiisph(nn)'])

# 4. Calculation of xiisph(rrr) depending on the radius of curvature rrr
nnn = 1.5
xxxo = 10
rrr = np.arange(1, 21, 1)
xi = 1 / ((nnn - 1) / (nnn * rrr) + 1 / (nnn * xxxo))
xiisph = nnn / (
    ((nnn - 1) / rrr)
    + 1 / xxxo
    + ((nnn - 1) / (nnn ** 2)) * ((ro ** 2) / 2) * (((1 / rrr - 1 / xxxo) ** 2) * (1 / rrr - ((nnn + 1) / xxxo)))
)

plt.subplot(4, 2, 6)
plt.plot(rrr, xi, label='xi(rrr)')
plt.xlim(0, 20)
plt.ylim(0, 15)
plt.xlabel('rrr')
plt.legend(['xi(rrr)'])

plt.subplot(4, 2, 7)
plt.plot(rrr, xiisph, label='xiisph(rrr)')
plt.xlim(0, 20)
plt.ylim(0, 15)
plt.xlabel('rrr')
plt.legend(['xiisph(rrr)'])

plt.subplot(4, 2, 8)
plt.plot(rrr, xi - xiisph, label='xi - xiisph')
plt.xlim(0, 20)
plt.ylim(-0.5, 1)
plt.xlabel('rrr')
plt.legend(['xi(rrr)-xiisph(rrr)'])

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% A2SPASSS
% Spherical aberration of a single refracting surface.
% Definiton: Longitudinal spherical Aberration L.S.A. = xi - xiisph
% Calculation of image point xi and corrected image point xiisph
% All length in cm.

function A2SPASSS;
% 1. Calculation of xi(xo) for negative values of xo
ro = 2;
n = 1.5;
r = 10;
xo = (-20:-1:-100);
xi = 1./(((n-1)/(n*r))+1./(n*xo));

% 2. Calculation of xiisph(xo) depending on xo for the corrected case of L.S.A

xiisph = n./(((n-1)/r)+1./xo+((n-1)/(n^2))*((ro^2)/2)*(((1/r-1./xo).^2).*(1/r-((n+1)./xo))));

figure(1);
subplot(4,2,1);
plot(xo,xi,xo,xiisph);
axis([-100 0 0 100]);
xlabel('xo');
legend('xi(xo)','xiisph(xo)');

subplot(4,2,2);
plot(xo,xi-xiisph);
axis([-100 0 -10 20]);
xlabel('xo');
legend('xi(xo)-xiisph(xo)');

% 3. Calculation of xiisph(nn) depending on the refractive index nn
xxo = -30;
rr = 10;
nn = (1.4:0.01:4);
xi = 1./((nn-1)./(nn*rr)+1./(nn*xxo));
xiisph = n./(((nn-1)/r)+1/xxo+((nn-1)./(nn.^2))*((ro^2)/2).*(((1/r-1/xxo)^2).*(1/r-((nn+1)/xxo))));

subplot(4,2,3);
plot(nn,xi);
axis([1 4 0 300]);
xlabel('nn');
legend('xi(nn)');

subplot(4,2,4);
plot(nn,xiisph);
axis([1 4 0 200]);
xlabel('nn');
legend('xiisph(nn)');

% There is no value for which LSA = 0
subplot(4,2,5);
plot(nn,xi-xiisph);
axis([1 4 0 100]);
xlabel('nn');
legend('xi(nn)-xiisph(nn)');


% 4. Calculation of xiisph(rrr) depending on the radius of curvature rrrr
nnn = 1.5;
xxxo = 10;
rrr = (1:1:20);
xi = 1./((nnn-1)./(nnn*rrr)+1./(nnn*xxxo));
xiisph = n./(((nnn-1)./rrr)+1/xxxo+((nnn-1)/(nnn.^2))*((ro^2)/2)*(((1./rrr-1/xxxo).^2).*(1./rrr-((nnn+1)/xxxo))));

subplot(4,2,6);
plot(rrr,xi);
axis([0 20 0 15]);
xlabel('rrr');
legend('xi(rrr)');

subplot(4,2,7);
plot(rrr,xiisph);
axis([0 20 0 15]);
xlabel('rrr');
legend('xiisph(rrr)');

subplot(4,2,8);
plot(rrr,xi-xiisph);
axis([0 20 -0.5 1]);
xlabel('rrr');
legend('xi(rrr)-xiisph(rrr)');`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'A4SPHLSIPIS',
    title: "A4SPHLSIPIS - A4SPHLSIPIS\r",
    description: "A4SPHLSIPIS\r",
    category: "Optics - Aberrations",
    chapter: '11',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# A4SPHLSIPIS

# Spherical Aberration. The pi_val-sigma equation
# We assume n=1.5 and compare the cases of real and virtual images.

# 1. Image for f = 10, and xo to the left of focal point, LSA may not be eliminated

r1 = 10
r2 = -10
n = 1.5
ro = 4
xo = 4
f = 1/((n-1)*(1/r1-1/r2))   # f = 10
xi = 1/(1/f+1/xo)           # xi = 2.857

# 2. Definitions
# Definition: Sigma = (r2-r1)/(r2+r1)
Sigma = np.arange(-10, 10+0.1, 0.1)
# 3. pi_val-Sigma Equation
pi_val = (xi+xo)/(xi-xo)       # pi_val = -6



fig = plt.figure(1)

plt.plot(Sigma,Y(Sigma)
)
plt.xlim(-10, 10)
plt.ylim(0, 0.1)

plt.xlabel('\sigma')
plt.legend(['Y(\sigma)'])
# 4. Minimum value of Y(?)
# The value of Y(?) at the minimum is obtained by differentiation and equating equal to 0.
# The result is
Sigmamin = -B(n)*(pi_val/(2*A(n)))  # Sigmamin = 4.286

# Calculation of the corresponding value of Y(Sigmamin)
Ymin = Y(Sigmamin)     # Ymin = -0.013




Out = (n+2)/(8*n*((n-1)**2))
Out = (n+1)/(2*n*(n-1))
Out = (3*n+2)/(8*n)
Out = (n**2)/(8*((n-1)**2))
Out = ((ro**2)/(f**3))*(A(n)*(Sigma**2)+B(n)*Sigma*pi_val+C(n)*(pi_val**2)+D(n))
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% A4SPHLSIPIS

% Spherical Aberration. The pi-sigma equation
% We assume n=1.5 and compare the cases of real and virtual images.
function A4SPHLSIPIS;
% 1. Image for f = 10, and xo to the left of focal point, LSA may not be eliminated
global ro f pi n;
r1 = 10;
r2 = -10;
n = 1.5;
ro = 4;
xo = 4;

f = 1/((n-1)*(1/r1-1/r2))   % f = 10
xi = 1/(1/f+1/xo)           % xi = 2.857

% 2. Definitions
% Definition: Sigma = (r2-r1)/(r2+r1)
Sigma = (-10:0.1:10);

% 3. pi-Sigma Equation
pi = (xi+xo)/(xi-xo)       % pi = -6



figure(1);
plot(Sigma,Y(Sigma));
axis([-10 10 0 0.1]);
xlabel('\sigma');
legend('Y(\sigma)');
% 4. Minimum value of Y(?)
% The value of Y(?) at the minimum is obtained by differentiation and equating equal to 0.
% The result is
Sigmamin = -B(n)*(pi/(2*A(n)))  % Sigmamin = 4.286

% Calculation of the corresponding value of Y(Sigmamin)
Ymin = Y(Sigmamin)     % Ymin = -0.013



function Out=A(n)
Out = (n+2)./(8*n.*((n-1).^2));

function Out=B(n)
Out = (n+1)./(2*n.*(n-1));

function Out=C(n)
Out = (3*n+2)./(8*n);

function Out=D(n)
Out = (n.^2)./(8*((n-1).^2));

function Out=Y(Sigma)
global ro f pi n;
Out = ((ro^2)/(f^3))*(A(n)*(Sigma.^2)+B(n)*Sigma*pi+C(n)*(pi^2)+D(n));

`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'A5COMAS',
    title: "A5COMAS - A5COMAS\r",
    description: "A5COMAS\r",
    category: "Optics - Aberrations",
    chapter: '11',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# A5COMAS

# The tangential coma CT and the sagittal coma CS are calulated depending on
# using expressions of the third order theory. For similar expressions see
# Jenkins and White, 4th Ed, p.163.


# 1. No coma and spherical aberration
r1 = 11
r2 = -10
xo = -30
n = 1.3168
f = 1/((1/r1-1/r2)*(n-1))
xi = 1/(1/f + 1/xo)         # xi = 36.837

# 2. Definitions for calculations on coma

pi_val = (xi + xo)/(xi-xo)      # pi_val = 0.102
Sigma = (r2+r1)/(r2-r1)     # Sigma = -0.048
Rho = 1.5
G = (3*(2*n+1))/(4*n)       # G = 2.07
W = (3*(n+1))/(4*n*(n-1))   # W = 4.165

ZZ = W*Sigma + G*pi_val
# Tangential Coma CT as function of Rho

Rho =np.arange(0, 1+0.01, 0.01)
Beta = 0.05
CT = (Rho**2)*((ZZ*np.tan(Beta))/(f**2))
fig = plt.figure(1)

plt.plot(Rho,CT)

plt.xlim(0, 1)
plt.ylim(0, 3e-6)

plt.xlabel('\rho')
plt.legend(['CT(\rho)'])
# Condition for elimination of coma
# if Rho = -((2n+1)(n-1)/(n+1))pi_val:
# CT is zero for all zones
# CS = 1/3 CT
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% A5COMAS

% The tangential coma CT and the sagittal coma CS are calulated depending on
% using expressions of the third order theory. For similar expressions see
% Jenkins and White, 4th Ed, p.163.

function A5COMAS;
% 1. No coma and spherical aberration
r1 = 11;
r2 = -10;
xo = -30;
n = 1.3168;
f = 1/((1/r1-1/r2)*(n-1));
xi = 1/(1/f + 1/xo)         % xi = 36.837

% 2. Definitions for calculations on coma

pi = (xi + xo)/(xi-xo)      % pi = 0.102
Sigma = (r2+r1)/(r2-r1)     % Sigma = -0.048
Rho = 1.5;
G = (3*(2*n+1))/(4*n)       % G = 2.07
W = (3*(n+1))/(4*n*(n-1))   % W = 4.165

ZZ = W*Sigma + G*pi;

% Tangential Coma CT as function of Rho

Rho =(0:0.01:1);
Beta = 0.05;


CT = (Rho.^2)*((ZZ*tan(Beta))/(f^2));
figure(1);
plot(Rho,CT);
axis([0 1 0 3e-6]);
xlabel('\rho');
legend('CT(\rho)');
% Condition for elimination of coma
% if Rho = -((2n+1)(n-1)/(n+1))pi
% CT is zero for all zones
% CS = 1/3 CT`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'A6COMPLANS',
    title: "A6COMPLANS - A6COMPLANS\r",
    description: "A6COMPLANS\r",
    category: "Optics - Aberrations",
    chapter: '11',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# A6COMPLANS
# For the aplanatic lens, both, spherical aberration and coma are zero. For the
# calculation of coma, the incident light is assumed to be parallel.


# 1.The aplanatic lens
r1 = -30
xo = r1
n = 1.5
Rho = 1
Beta = 0.05
r2 = (xo*n)/(n+1)
xi = n*xo
f = ((n+1)/(n-1))*r2
# and for pi_val, sigma, W, G
pi_val = (xi+xo)/(xi-xo)    # pi_val = 5
Sigma = (r2+xo)/(r2-xo) # Sigma = -4

# 2. The correction for coma
# Coma is eliminated if Co = 0, that is (W(n)Sigma + G(n)pi_val) is 0, or Sigma = -pi_val(G(n)/W(n)):
# 3. Graph of y(n) = W(n)*Sigma + G(n)*pi_val
# we double up and use nn
nn = np.arange(1, 4+0.01, 0.01)
pp = (nn*xo + xo)/(nn*xo - xo)
r2 = xo*((nn)/(nn+1))
ss = (r2+r1)/(r2-r1)
y = W(nn)*ss+G(nn)*pp
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(nn,y)

plt.xlim(1, 4)
plt.ylim(-1e-12, 5e-13)

plt.xlabel('nn')
plt.legend(['y(nn)'])
# Coma is zero for most values of nn
plt.subplot(2, 1, 2)

plt.plot(nn,ss)

plt.xlim(1, 4)
plt.ylim(-10, 0)

plt.xlabel('nn')
plt.legend(['ss(nn)'])
Out = (3*(n+1))/(4*n*(n-1))
Out = (3*(2*n+1))/(4*n)
Out = ((Rho**2*np.tan(Beta))/(f**2))*(W(Rho)*Sigma+G(Rho)*pi_val)
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% A6COMPLANS
% For the aplanatic lens, both, spherical aberration and coma are zero. For the
% calculation of coma, the incident light is assumed to be parallel.

function A6COMPLANS;
global Beta f Sigma pi n;
% 1.The aplanatic lens
r1 = -30
xo = r1;
n = 1.5;
Rho = 1;
Beta = 0.05;
r2 = (xo*n)/(n+1);
xi = n*xo;
f = ((n+1)/(n-1))*r2;
% and for pi, sigma, W, G
pi = (xi+xo)/(xi-xo)    % pi = 5
Sigma = (r2+xo)/(r2-xo) % Sigma = -4

% 2. The correction for coma
% Coma is eliminated if Co = 0, that is (W(n)Sigma + G(n)pi) is 0, or Sigma = -pi(G(n)/W(n))

% 3. Graph of y(n) = W(n)*Sigma + G(n)*pi
% we double up and use nn
nn = (1:0.01:4);
pp = (nn*xo + xo)./(nn*xo - xo);
r2 = xo*((nn)./(nn+1));
ss = (r2+r1)./(r2-r1);
y = W(nn).*ss+G(nn).*pp;

figure(1);
subplot(2,1,1);
plot(nn,y);
axis([1 4 -1e-12 5e-13]);
xlabel('nn');
legend('y(nn)');

% Coma is zero for most values of nn
subplot(2,1,2);
plot(nn,ss);
axis([1 4 -10 0]);
xlabel('nn');
legend('ss(nn)');


function Out=W(n)
Out = (3*(n+1))./(4*n.*(n-1));

function Out=G(n)
Out = (3*(2*n+1))./(4*n);

function Out=Co(Rho)
global Beta f Sigma pi n;
Out = ((Rho.^2*tan(Beta))/(f^2))*(W(Rho)*Sigma+G(Rho)*pi);`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'A7ASTSINS',
    title: "A7ASTSINS - A7ASTSINS\r",
    description: "A7ASTSINS\r",
    category: "Optics - Aberrations",
    chapter: '11',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# A7ASTSINS

# Astigmatism on a single surface.

# We have for the horizontal and vertical direction each an imaging equation which
# looks like the imaging equation for the single spherical surface, but the expressions
# depend on angles.


# 1. The vertical and horizontal imaging equations.
# We have for horizontal -1/xo +n/xih = (n cos?' -cos?)/r
# and for vertical -cos?**2/xo +ncos?'**2/xiv = (ncos?'-cos?)/r
# using the law of refraction we can replace ?' by ?. We call np.cos( ? ') = c(?)

# 2. For fixed n we make calculate xih(?) as a function of ?

Phi = (.1:0.01:0.5)
xo = -100
r = 10
n = 1.2
c = np.sqrt(1-((np.sin(2*np.pi*(Phi/360)))**2)/(n**2))
xih = n/((n*c-np.cos(2*Phi*(np.pi/360)))/r + 1/xo)
# 3. For fixed n we make calculate xiv(?) as a function of ?

xiv = (n*(c**2))/((n*c-np.cos(2*Phi*(np.pi/360)))/r+((np.cos(2*np.pi*(Phi/360)))**2)/xo)
# 4. Graph of the difference ASD for fixed n
ASD = xih - xiv
fig = plt.figure(1)

plt.plot(Phi,ASD)

plt.xlim(0.1, 0.5)
plt.ylim(0, 0.015)

plt.xlabel('\phi')
plt.legend(['ASD(\phi)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% A7ASTSINS

% Astigmatism on a single surface.

% We have for the horizontal and vertical direction each an imaging equation which
% looks like the imaging equation for the single spherical surface, but the expressions
% depend on angles.

function A7ASTSINS;
% 1. The vertical and horizontal imaging equations.
% We have for horizontal -1/xo +n/xih = (n cos?' -cos?)/r
% and for vertical -cos?^2/xo +ncos?'^2/xiv = (ncos?'-cos?)/r
% using the law of refraction we can replace ?' by ?. We call cos( ? ') = c(?)

% 2. For fixed n we make calculate xih(?) as a function of ?

Phi = (.1:0.01:0.5);
xo = -100;
r = 10;
n = 1.2
c = sqrt(1-((sin(2*pi*(Phi/360))).^2)/(n^2));
xih = n./((n*c-cos(2*Phi*(pi/360)))/r + 1/xo);

% 3. For fixed n we make calculate xiv(?) as a function of ?

xiv = (n*(c.^2))./((n*c-cos(2*Phi*(pi/360)))/r+((cos(2*pi*(Phi/360))).^2)/xo);

% 4. Graph of the difference ASD for fixed n
ASD = xih - xiv;

figure(1);
plot(Phi,ASD);
axis([0.1 0.5 0 0.015]);
xlabel('\phi');
legend('ASD(\phi)');`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'of',
    title: "of - A8ASTISMS\r",
    description: "A8ASTISMS\r",
    category: "Optics - Aberrations",
    chapter: '11',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# A8ASTISMS
# Astigmatism of a thin lens.

# We have for the horizontal and vertical direction each an imaging equation which
# looks like the imaging equation for the thin lens, but the expressions depend on angles.

# We have for horizontal -1/xo +1/xih = (cos?)(cos?'/cos? - 1)(1/r1-1/r2)
# and for vertical -1/xo +1/xiv = (1/cos?)(cos?'/cos? - 1)(1/r1-1/r2)

# using the law of refraction we can replace ?' by ? and make a plot of the difference
# xih-xiv as function of ?.

# 1. Graph of ASD for fixed n and dependence on ?
Phi = np.arange(1, 10+1, 1)
xoo = -400
r1 = 10
r2 = -12
n = 1.3
c = np.sqrt(1-(((np.sin(2*np.pi*(Phi/360)))**2)/(n**2)))
xih = 1/(((np.cos(2*np.pi*(Phi/360)))*((c/(np.cos(2*np.pi*(Phi/360))))-1)*(1/r1-1/r2))+1/xoo)
xiv = 1/(((1/np.cos(2*np.pi*(Phi/360)))*((c/(np.cos(2*np.pi*(Phi/360))))-1)*(1/r1-1/r2))+1/xoo)
ASD = xih - xiv
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(Phi,ASD)

plt.xlim(0, 10)
plt.ylim(0, 20)

plt.xlabel('\phi')
plt.legend(['ASD(\phi)'])
# 2. Graph of ASD for fixed ? and dependence on n

Phi = 5
xoo = -400
r1 = 10
r2 = -12
n=np.arange(1.3, 3+0.001, 0.001)
c = np.sqrt(1-(((np.sin(2*np.pi*(Phi/360)))**2)/(n**2)))
xih = 1/(((np.cos(2*np.pi*(Phi/360)))*((c/(np.cos(2*np.pi*(Phi/360))))-1)*(1/r1-1/r2))+1/xoo)
xiv = 1/(((1/np.cos(2*np.pi*(Phi/360)))*((c/(np.cos(2*np.pi*(Phi/360))))-1)*(1/r1-1/r2))+1/xoo)
ASD = xih - xiv
plt.subplot(2, 1, 2)

plt.plot(n,ASD)

plt.xlim(1, 3)
plt.ylim(0, 2)

plt.xlabel('n')
plt.legend(['ASD(n)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% A8ASTISMS
% Astigmatism of a thin lens.

% We have for the horizontal and vertical direction each an imaging equation which
% looks like the imaging equation for the thin lens, but the expressions depend on angles.

% We have for horizontal -1/xo +1/xih = (cos?)(cos?'/cos? - 1)(1/r1-1/r2)
% and for vertical -1/xo +1/xiv = (1/cos?)(cos?'/cos? - 1)(1/r1-1/r2)

% using the law of refraction we can replace ?' by ? and make a plot of the difference
% xih-xiv as function of ?.
function A8ASTISMS;
% 1. Graph of ASD for fixed n and dependence on ?
Phi = (1:1:10);
xoo = -400;
r1 = 10;
r2 = -12;
n = 1.3;
c = sqrt(1-(((sin(2*pi*(Phi/360))).^2)/(n^2)));
xih = 1./(((cos(2*pi*(Phi/360))).*((c./(cos(2*pi*(Phi/360))))-1)*(1/r1-1/r2))+1/xoo);
xiv = 1./(((1./cos(2*pi*(Phi/360))).*((c./(cos(2*pi*(Phi/360))))-1)*(1/r1-1/r2))+1/xoo);

ASD = xih - xiv;

figure(1);
subplot(2,1,1);
plot(Phi,ASD);
axis([0 10 0 20]);
xlabel('\phi');
legend('ASD(\phi)');

% 2. Graph of ASD for fixed ? and dependence on n

Phi = 5;
xoo = -400;
r1 = 10;
r2 = -12
n=(1.3:0.001:3);
c = sqrt(1-(((sin(2*pi*(Phi/360)))^2)./(n.^2)));

xih = 1./(((cos(2*pi*(Phi/360)))*((c./(cos(2*pi*(Phi/360))))-1)*(1/r1-1/r2))+1/xoo);
xiv = 1./(((1/cos(2*pi*(Phi/360)))*((c./(cos(2*pi*(Phi/360))))-1)*(1/r1-1/r2))+1/xoo);
ASD = xih - xiv;

subplot(2,1,2);
plot(n,ASD);
axis([1 3 0 2]);
xlabel('n');
legend('ASD(n)');
`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'I10WEDGES',
    title: "I10WEDGES - I10WEDGES\r",
    description: "I10WEDGES\r",
    category: "Optics - Interference",
    chapter: '2',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I10WEDGES
# Fringes of a wedge given by y.

# The distance is given by yy
Alpha = 0.002
Lamda1 = 0.0005
Lamda2 = 0.0008
Lamda3 = 0.0012
x = np.arange(0, 1+0.01, 0.01)
y1 = y(x,Lamda1)
y2 = y(x,Lamda2)
y3 = y(x,Lamda3)
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(x,y1,x,y2,x,y3)

plt.xlim(0, 1)
plt.ylim(0, 1)

plt.xlabel('x')
plt.legend(['y1(x,\lambda1)', 'y2(x,\lambda2)', 'y3(x,\lambda3)'])

# Height at x
h = x*np.tan(Alpha)
plt.subplot(3, 2, 5)

plt.plot(x,h)

plt.xlim(0, 1)
plt.ylim(0, 0.003)

plt.xlabel('x')
plt.legend(['h(x)'])
# Distance between two Maxima depending on ? xx = ?/(2 tan ?)

Lamda = np.arange(0.0001, 0.0015+0.0001, 0.0001)
xx = Lamda/(2*np.tan(Alpha))
plt.subplot(3, 2, 6)

plt.plot(Lamda,xx)

plt.xlim(0, 0.0015)
plt.ylim(0, 0.4)

plt.xlabel('\lambda')
plt.legend(['xx(\lambda)'])
Out = np.cos(2*np.pi*x*(np.tan(Alpha)/Lamda)+np.pi/2)**2
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% I10WEDGES
% Fringes of a wedge given by y.
function I10WEDGES;
% The distance is given by yy;
global Alpha;
Alpha = 0.002;
Lamda1 = 0.0005;
Lamda2 = 0.0008;
Lamda3 = 0.0012;
x = (0:0.01:1);
y1 = y(x,Lamda1);
y2 = y(x,Lamda2);
y3 = y(x,Lamda3);

figure(1);
subplot(2,1,1);
plot(x,y1,x,y2,x,y3);
axis([0 1 0 1]);
xlabel('x');
legend('y1(x,\lambda1)','y2(x,\lambda2)','y3(x,\lambda3)')

% Height at x
h = x*tan(Alpha);

subplot(3,2,5);
plot(x,h);
axis([0 1 0 0.003]);
xlabel('x');
legend('h(x)');

% Distance between two Maxima depending on ? xx = ?/(2 tan ?)

Lamda = (0.0001:0.0001:0.0015);
xx = Lamda/(2*tan(Alpha));

subplot(3,2,6);
plot(Lamda,xx);
axis([0 0.0015 0 0.4]);
xlabel('\lambda');
legend('xx(\lambda)');


function Out=y(x,Lamda)
global Alpha;
Out = cos(2*pi*x*(tan(Alpha)/Lamda)+pi/2).^2;
`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'I11NEWTONS',
    title: "I11NEWTONS - I11NEWTONS\r",
    description: "I11NEWTONS\r",
    category: "Optics - Interference",
    chapter: '2',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I11NEWTONS
# Newton's rings
# Path difference d=(R -SQ(R**2-r**2))

# R is radius of curvature of the lens in mm
# r is the distance from the center in mm


r = np.arange(0, 4+0.01, 0.01)
R = 2000
Lamda = 0.0005
d = R-np.sqrt(R**2-r**2)
INR = np.cos(2*np.pi*(d/Lamda)+np.pi/2)**2
INT = np.cos(2*np.pi*(d/Lamda))**2
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(r,INT)

plt.xlim(0, 4)
plt.ylim(0, 1)

plt.xlabel('r')
plt.legend(['INT(r)'])
plt.subplot(2, 1, 2)

plt.plot(r,INR)

plt.xlim(0, 4)
plt.ylim(0, 1)

plt.xlabel('r')
plt.legend(['INR(r)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% I11NEWTONS
% Newton's rings
% Path difference d=(R -SQ(R^2-r^2))

% R is radius of curvature of the lens in mm
% r is the distance from the center in mm

function I11NEWTONS;
r = (0:0.01:4);
R = 2000;
Lamda = 0.0005;
d = R-sqrt(R^2-r.^2);
INR = cos(2*pi*(d/Lamda)+pi/2).^2;
INT = cos(2*pi*(d/Lamda)).^2;

figure(1);
subplot(2,1,1);
plot(r,INT);
axis([0 4 0 1]);
xlabel('r');
legend('INT(r)');

subplot(2,1,2);
plot(r,INR);
axis([0 4 0 1]);
xlabel('r');
legend('INR(r)');
`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'I12MICHDLS',
    title: "I12MICHDLS - I12MICHDLS\r",
    description: "I12MICHDLS\r",
    category: "Optics - Interference",
    chapter: '2',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I12MICHDLS

# Michelson interferometer
# Beamsplitter is assumed to be a plane parallel plate
# Fringe pattern depending on D for wavelength ? = .0005, and depending on wavelength
# ? for D = .003. The angle ? = 0.
# All length in mm.


# 1. Dependence on D
Theta = 0
Lamda = 0.0005
D = np.arange(0.027, 0.0325+0.00001, 0.00001)
I1 = np.cos((2*np.pi*D*np.cos(Theta))/Lamda)**2
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(D,I1)

plt.xlim(0.026, 0.033)
plt.ylim(0, 1)

plt.xlabel('D')
plt.legend(['I1(D)'])
# 2. Dependence on Lamda
Lamda = np.arange(0.0004, 0.0008+0.000001, 0.000001)
D = 0.003
I2 = np.cos((2*np.pi*D*np.cos(Theta))/Lamda)**2
plt.subplot(2, 1, 2)

plt.plot(Lamda,I2)

plt.xlim(3e-4, 8e-4)
plt.ylim(0, 1)

plt.xlabel('\lambda')
plt.legend(['I2(\lambda)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% I12MICHDLS

% Michelson interferometer
% Beamsplitter is assumed to be a plane parallel plate
% Fringe pattern depending on D for wavelength ? = .0005, and depending on wavelength
% ? for D = .003. The angle ? = 0.
% All length in mm.

function I12MICHDLS;
% 1. Dependence on D
Theta = 0;
Lamda = 0.0005;
D = (0.027:0.00001:0.0325);
I1 = cos((2*pi*D*cos(Theta))/Lamda).^2;

figure(1);
subplot(2,1,1);
plot(D,I1);
axis([0.026 0.033 0 1]);
xlabel('D');
legend('I1(D)');

%2. Dependence on Lamda
Lamda = (0.0004:0.000001:0.0008);
D = 0.003;
I2 = cos((2*pi*D*cos(Theta))./Lamda).^2;
subplot(2,1,2);
plot(Lamda,I2);
axis([3e-4 8e-4 0 1]);
xlabel('\lambda');
legend('I2(\lambda)');
`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'I13MICHANS',
    title: "I13MICHANS - I13MICHANS\r",
    description: "I13MICHANS\r",
    category: "Optics - Interference",
    chapter: '2',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I13MICHANS

# Michelson interferometer, Dependence on ?.
# (Beamsplitter is assumed to be a dialectric plate)
# Fringe pattern depending on angle ? for two fixed wavelength ? and ?? and fixed
# displacement D.
# All length in mm.


Lamda = 0.0005
D = 0.05
LamdaLamda = 0.00052
Theta = np.arange(-0.301, 0.3+0.001, 0.001)
IM1 = np.cos((2*np.pi*D*np.cos(Theta))/Lamda)**2
IM2 = np.cos((2*np.pi*D*np.cos(Theta))/LamdaLamda)**2
fig = plt.figure(1)

plt.plot(Theta,IM1,Theta,IM2)

plt.xlim(-0.4, 0.3)
plt.ylim(0, 1)

plt.xlabel('\theta')
plt.legend(['IM1(\theta,D)', 'IM2(\theta,D)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% I13MICHANS

% Michelson interferometer, Dependence on ?.
% (Beamsplitter is assumed to be a dialectric plate)
% Fringe pattern depending on angle ? for two fixed wavelength ? and ?? and fixed
% displacement D.
% All length in mm.

function I13MICHANS;
Lamda = 0.0005;
D = 0.05;
LamdaLamda = 0.00052;
Theta = (-0.301:0.001:0.3);

IM1 = cos((2*pi*D*cos(Theta))/Lamda).^2;
IM2 = cos((2*pi*D*cos(Theta))/LamdaLamda).^2;

figure(1);
plot(Theta,IM1,Theta,IM2);
axis([-0.4 0.3 0 1]);
xlabel('\theta');
legend('IM1(\theta,D)','IM2(\theta,D)');
`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'I14PLANIDS',
    title: "I14PLANIDS - I14PLANIDS\r",
    description: "I14PLANIDS\r",
    category: "Optics - Interference",
    chapter: '2',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I14PLANIDS

# Normal incidence. Plane parallel plate, reflected and transmitted intensity
# depending on thickness for fixed wavelength.
# The reflection coefficients are calculated from Fresnels formulas for ? = 0
# Refractive indices n1, n2 and n3 may all be different and the reflection coefficient
# for both surfaces are calculated.
# The calculation of the fringe pattern is done depending on D for fixed ?, .


# Delta = 2*np.pi/Lamda   2dn2
Theta1 = 1
n1 = 1
n2 = 1.5
n3 = 1
# Delta = 2*np.pi/Lamda   2dn2
r12 = (n2 - n1)/(n2+n1) # r12 = 0.2
r23 = (n3 - n2)/(n3+n2) # r23 = -0.2
Lamda = 0.0005
D = np.arange(0.0002, 0.002+0.00001, 0.00001)
IT = ((1-r12**2)*(1-r23**2))/(1+(r12*r23)**2-(2*r12*r23)*np.cos(4*np.pi*(D/Lamda)*n2))
IR = 1 - IT
fig = plt.figure(1)

plt.subplot(1, 2, 1)

plt.plot(D,IT)

plt.xlim(0, 0.002)
plt.ylim(0, 1)

plt.xlabel('D')
plt.legend(['IT(D)'])
plt.title('Transmitted Pattern')
plt.subplot(1, 2, 2)

plt.plot(D,IR)

plt.xlim(0, 0.002)
plt.ylim(0, 1)

plt.xlabel('D')
plt.legend(['IR(D)'])
plt.title('Reflected Pattern')

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% I14PLANIDS

% Normal incidence. Plane parallel plate, reflected and transmitted intensity
% depending on thickness for fixed wavelength.
% The reflection coefficients are calculated from Fresnels formulas for ? = 0
% Refractive indices n1, n2 and n3 may all be different and the reflection coefficient
% for both surfaces are calculated.
% The calculation of the fringe pattern is done depending on D for fixed ?, .

function I14PLANIDS;
% Delta = 2*pi/Lamda   2dn2
Theta1 = 1;
n1 = 1;
n2 = 1.5;
n3 = 1;
% Delta = 2*pi/Lamda   2dn2
r12 = (n2 - n1)/(n2+n1) %r12 = 0.2;
r23 = (n3 - n2)/(n3+n2) %r23 = -0.2
Lamda = 0.0005;
D = (0.0002:0.00001:0.002);
IT = ((1-r12^2)*(1-r23^2))./(1+(r12*r23)^2-(2*r12*r23)*cos(4*pi*(D/Lamda)*n2));
IR = 1 - IT;

figure(1);
subplot(1,2,1);
plot(D,IT);
axis([0 0.002 0 1]);
xlabel('D');
legend('IT(D)');
title('Transmitted Pattern');
subplot(1,2,2);
plot(D,IR);
axis([0 0.002 0 1]);
xlabel('D');
legend('IR(D)');
title('Reflected Pattern');



`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'I15PLANIDS',
    title: "I15PLANIDS - I15PLANIDS\r",
    description: "I15PLANIDS\r",
    category: "Optics - Interference",
    chapter: '2',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I15PLANIDS
# Normal incidence. Plane parallel plate, reflected and transmitted intensity
# depending on wavelength for fisec thickness.
# The reflection coefficients are calculated from Fresnels formulas for ? = 0
# Refractive indices n1, n2 and n3 may all be different and the reflection coefficient
# for both surfaces are calculated.
# The calculation of the fringe pattern is done depending on ? for fixed D.

# Delta = 2*np.pi/Lamda   2dn2
n1 = 1
n2 = 1.5
n3 = 1
r12 = (n2-n1)/(n2+n1)   # r12 = 0.2
r23 = (n3-n2)/(n3+n2)   # r23 = -0.2
# Delta = 2*np.pi/Lamda   2dn2
Lamda = np.arange(0.021, 1+0.001, 0.001)
D = 0.2
IT = ((1-r12**2)*(1-r23**2))/(1+(r12*r23)**2-(2*r12*r23)*np.cos(4*np.pi*(D/Lamda)*n2))
IR = 1 - IT
fig = plt.figure(1)

plt.subplot(1, 2, 1)

plt.plot(Lamda,IT)

plt.xlim(0, 1)
plt.ylim(0, 1)

plt.xlabel('\lambda')
plt.legend(['IT(\lambda)'])
plt.title('Transmitted Pattern')
plt.subplot(1, 2, 2)

plt.plot(Lamda,IR)

plt.xlim(0, 1)
plt.ylim(0, 1)

plt.xlabel('\lambda')
plt.legend(['IR(\lambda)'])
plt.title('Reflected Pattern')

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% I15PLANIDS
% Normal incidence. Plane parallel plate, reflected and transmitted intensity
% depending on wavelength for fisec thickness.
% The reflection coefficients are calculated from Fresnels formulas for ? = 0
% Refractive indices n1, n2 and n3 may all be different and the reflection coefficient
% for both surfaces are calculated.
% The calculation of the fringe pattern is done depending on ? for fixed D.
function I15PLANIDS;
% Delta = 2*pi/Lamda   2dn2
n1 = 1;
n2 = 1.5;
n3 = 1;
r12 = (n2-n1)/(n2+n1)   % r12 = 0.2;
r23 = (n3-n2)/(n3+n2)   % r23 = -0.2
% Delta = 2*pi/Lamda   2dn2
Lamda = (0.021:0.001:1);
D = 0.2;
IT = ((1-r12^2)*(1-r23^2))./(1+(r12*r23)^2-(2*r12*r23)*cos(4*pi*(D./Lamda)*n2));
IR = 1 - IT;

figure(1);
subplot(1,2,1);
plot(Lamda,IT);
axis([0 1 0 1]);
xlabel('\lambda');
legend('IT(\lambda)');
title('Transmitted Pattern');
subplot(1,2,2);
plot(Lamda,IR);
axis([0 1 0 1]);
xlabel('\lambda');
legend('IR(\lambda)');
title('Reflected Pattern');

`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'I16FABRYS',
    title: "I16FABRYS - I16FABRYS\r",
    description: "I16FABRYS\r",
    category: "Optics - Interference",
    chapter: '2',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I16FABRYS
# Fabry-Perot Transmission depending on D.
# ?ormal incidence. Parameters: reflection coefficient, wavelength ?, refractive index.
# See for global definition.The finess ?g/2 is ?/ ??. All length in mm.

# Delta = 2*np.pi/Lamda   2D (n2) np.cos(Theta2)
D = np.arange(0, 0.11+0.001, 0.001)
n2 = 1
Lamda = 0.1
r1 = 0.7
r2 = 0.9
r3 = 0.97
g1 = (2*r1)/(1-r1**2)
g2 = (2*r2)/(1-r2**2)
g3 = (2*r1)/(1-r3**2)
IT1 = 1/(1+(g1**2)*((np.sin(2*(np.pi/Lamda)*D*n2))**2))
IT2 = 1/(1+(g2**2)*((np.sin(2*(np.pi/Lamda)*D*n2))**2))
IT3 = 1/(1+(g3**2)*((np.sin(2*(np.pi/Lamda)*D*n2))**2))
fig = plt.figure(1)

plt.plot(D,IT1,D,IT2,D,IT3)

plt.xlim(0, 0.12)
plt.ylim(0, 1)

plt.xlabel('D')
plt.legend(['IT1(D)', 'IT2(D)', 'IT3(D)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% I16FABRYS
% Fabry-Perot Transmission depending on D.
% ?ormal incidence. Parameters: reflection coefficient, wavelength ?, refractive index.
% See for global definition.The finess ?g/2 is ?/ ??. All length in mm.
function I16FABRYS;
% Delta = 2*pi/Lamda   2D (n2) cos(Theta2)
D = (0:0.001:0.11);
n2 = 1;
Lamda = 0.1;
r1 = 0.7
r2 = 0.9
r3 = 0.97;
g1 = (2*r1)/(1-r1^2);
g2 = (2*r2)/(1-r2^2);
g3 = (2*r1)/(1-r3^2);

IT1 = 1./(1+(g1^2)*((sin(2*(pi/Lamda)*D*n2)).^2));
IT2 = 1./(1+(g2^2)*((sin(2*(pi/Lamda)*D*n2)).^2));
IT3 = 1./(1+(g3^2)*((sin(2*(pi/Lamda)*D*n2)).^2));

figure(1);
plot(D,IT1,D,IT2,D,IT3);
axis([0 0.12 0 1]);
xlabel('D');
legend('IT1(D)','IT2(D)','IT3(D)');
`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'I17FABRYLS',
    title: "I17FABRYLS - I17FABRYLS\r",
    description: "I17FABRYLS\r",
    category: "Optics - Interference",
    chapter: '2',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I17FABRYLS

# Fabry-Perot Transmission depending on wavelength. 
# ?ormal incidence. Parameters: reflection coefficient, thickness D, refractive index.
# All length in mm.
# See for global definition.The finess ?g/2 is ?/ ??.

# Delta = 2*np.pi/Lamda   2D (n2) np.cos(Theta2)
n2 = 1
r1 = 0.7
r2 = 0.9
r3 = 0.97
D = 0.0025
Lamda = np.arange(0.0004, 0.0008+0.000001, 0.000001)
g1 = (2*r1)/(1-r1**2)
g2 = (2*r2)/(1-r2**2)
g3 = (2*r1)/(1-r3**2)
IT1 = 1/(1+(g1**2)*((np.sin(2*(np.pi/Lamda)*D*n2))**2))
IT2 = 1/(1+(g2**2)*((np.sin(2*(np.pi/Lamda)*D*n2))**2))
IT3 = 1/(1+(g3**2)*((np.sin(2*(np.pi/Lamda)*D*n2))**2))
fig = plt.figure(1)

plt.plot(Lamda,IT1,Lamda,IT2,Lamda,IT3)

plt.xlim(3.5e-4, 8e-4)
plt.ylim(0, 1)

plt.xlabel('\lambda')
plt.legend(['IT1(\lambda)', 'IT2(\lambda)', 'IT3(\lambda)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% I17FABRYLS

% Fabry-Perot Transmission depending on wavelength. 
% ?ormal incidence. Parameters: reflection coefficient, thickness D, refractive index.
% All length in mm.
% See for global definition.The finess ?g/2 is ?/ ??.
function I17FABRYLS;
% Delta = 2*pi/Lamda   2D (n2) cos(Theta2)
n2 = 1;
r1 = 0.7;
r2 = 0.9;
r3 = 0.97;
D = 0.0025;
Lamda = (0.0004:0.000001:0.0008);


g1 = (2*r1)/(1-r1^2);
g2 = (2*r2)/(1-r2^2);
g3 = (2*r1)/(1-r3^2);

IT1 = 1./(1+(g1^2)*((sin(2*(pi./Lamda)*D*n2)).^2));
IT2 = 1./(1+(g2^2)*((sin(2*(pi./Lamda)*D*n2)).^2));
IT3 = 1./(1+(g3^2)*((sin(2*(pi./Lamda)*D*n2)).^2));

figure(1);
plot(Lamda,IT1,Lamda,IT2,Lamda,IT3);
axis([3.5e-4 8e-4 0 1]);
xlabel('\lambda');
legend('IT1(\lambda)','IT2(\lambda)','IT3(\lambda)');
`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'I18FABRYRDS',
    title: "I18FABRYRDS - I18FABRYRDS\r",
    description: "I18FABRYRDS\r",
    category: "Optics - Interference",
    chapter: '2',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I18FABRYRDS

# Fabry-Perot Ring pattern in Transmission and Reflection depending on
# angle.

# ?ear normal incidence. Parameters: reflection coefficient, thickness d,
# refractive index
# and range of angles in Rad. All length in mm.


r = 0.7
Lamda1 = 0.0005
Lamda2 = 0.0006
g = (2*r)/(1-r**2)
D = np.arange(0, 0.001+0.00001, 0.00001)
IT = 1/(1+(g**2)*(np.sin(2*(np.pi/Lamda1)*D)**2))
IIT = 1/(1+(g**2)*(np.sin(2*(np.pi/Lamda2)*D)**2))
# Graph for transmission depending on angle for fixed ratio of D/l
fig = plt.figure(1)

plt.plot(D,IT,D,IIT)

plt.xlim(0, 0.001)
plt.ylim(0, 1)

plt.xlabel('D')
plt.legend(['IT(D)', 'IIT(D)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% I18FABRYRDS

% Fabry-Perot Ring pattern in Transmission and Reflection depending on
% angle.

% ?ear normal incidence. Parameters: reflection coefficient, thickness d,
% refractive index
% and range of angles in Rad. All length in mm.

function I18FABRYRDS;
r = 0.7;
Lamda1 = 0.0005;
Lamda2 = 0.0006;
g = (2*r)/(1-r^2);
D = (0:0.00001:0.001);
IT = 1./(1+(g^2)*(sin(2*(pi/Lamda1)*D).^2));
IIT = 1./(1+(g^2)*(sin(2*(pi/Lamda2)*D).^2));

% Graph for transmission depending on angle for fixed ratio of D/l
figure(1);
plot(D,IT,D,IIT);
axis([0 0.001 0 1]);
xlabel('D');
legend('IT(D)','IIT(D)');
`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'I19FABRYAS',
    title: "I19FABRYAS - I19FABRYAS\r",
    description: "I19FABRYAS\r",
    category: "Optics - Interference",
    chapter: '2',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I19FABRYAS

# Fabry-Perot Ring pattern in Transmission and Reflection depending on angle.

# ?ear normal incidence. Parameters: reflection coefficient, thickness d, refractive index
# and range of angles in Rad. All length in mm.


# Delta = 2*np.pi/Lamda   2dn2 np.cos(Theta)
n2 = 1
r = 0.9
D = 0.01
Lamda1 = 0.0005
Lamda2=0.0005025
Theta=np.arange(0, 40+0.01, 0.01)
g = (2*r)/(1-r**2)
IT = 1/(1+(g**2)*np.sin(2*(np.pi/Lamda1)*D*n2*np.cos(2*(np.pi/360)*Theta))**2)
IIT = 1/(1+(g**2)*np.sin(2*(np.pi/Lamda2)*D*n2*np.cos(2*(np.pi/360)*Theta))**2)
# Graph for transmission depending on angle for fixed ratio of D/Lamda
fig = plt.figure(1)

plt.plot(Theta,IT,Theta,IIT)

plt.xlim(0, 40)
plt.ylim(0, 1)

plt.xlabel('\theta')
plt.legend(['IT(\theta)', 'IIT(\theta)'])
plt.title('Graph for transmission depending on angle for fixed ratio of D/\lambda')

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% I19FABRYAS

% Fabry-Perot Ring pattern in Transmission and Reflection depending on angle.

% ?ear normal incidence. Parameters: reflection coefficient, thickness d, refractive index
% and range of angles in Rad. All length in mm.

function I19FABRYAS;
% Delta = 2*pi/Lamda   2dn2 cos(Theta)
n2 = 1;
r = 0.9;
D = 0.01;
Lamda1 = 0.0005;
Lamda2=0.0005025;
Theta=(0:0.01:40);

g = (2*r)/(1-r^2);

IT = 1./(1+(g^2)*sin(2*(pi/Lamda1)*D*n2*cos(2*(pi/360)*Theta)).^2);
IIT = 1./(1+(g^2)*sin(2*(pi/Lamda2)*D*n2*cos(2*(pi/360)*Theta)).^2);

% Graph for transmission depending on angle for fixed ratio of D/Lamda
figure(1);
plot(Theta,IT,Theta,IIT);
axis([0 40 0 1]);
xlabel('\theta');
legend('IT(\theta)','IIT(\theta)');
title('Graph for transmission depending on angle for fixed ratio of D/\lambda');
`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'depending',
    title: "depending - I1COSWS\r",
    description: "I1COSWS\r",
    category: "Optics - Interference",
    chapter: '2',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I1COSWS

# Cosine function depending on x, t, and a phase constant.
# Interchanging x/? with t/T in the phase factor 2?(x/? -t/T) has no effect on the
# cosine function.We see an equivalent dependence of the cos-function on x/?
# and t/T.
# Two sets of each three functions are shown, they give the same graphs
# when changing the dependence on x or t, using the same range, and leaving
# the other corresponding parameters the same.
# In the way the cosine functions are written, an additional phase factor may
# have its origin in the space or time part, we do not know.


x1=(0:.1:10); Lamda=1; T=10
A1=1; t1=1; theta1=0.5
A2=1; t2=2; theta2=0.2
A3=1; t3=3; theta3=0.1
ua1=A1*np.cos(2*np.pi*((x1/Lamda)-t1/T+theta1))
ua2=A2*np.cos(2*np.pi*((x1/Lamda)-t2/T+theta2))
ua3=A3*np.cos(2*np.pi*((x1/Lamda)-t3/T+theta3))
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(x1,ua1,x1,ua2,x1,ua3)

plt.xlim(0, 10)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
xlabel('x1','Fontsize',12)
plt.legend(['ua1(x1)', 'ua2(x1)', 'ua3(x1)'])
t1=(0:.1:10); LamdaLamda=10; TT=1
B1=1; x1=1; psi1=1
B2=1; x2=2; psi2=1
B3=1; x3=3; psi3=1
ub1=B1*np.cos(2*np.pi*((x1/LamdaLamda)-t1/TT+psi1))
ub2=B2*np.cos(2*np.pi*((x2/LamdaLamda)-t1/TT+psi2))
ub3=B3*np.cos(2*np.pi*((x3/LamdaLamda)-t1/TT+psi3))
plt.subplot(2, 1, 2)

plt.plot(t1,ub1,t1,ub2,t1,ub3)

plt.xlim(0, 10)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
xlabel('t1','Fontsize',12)
plt.legend(['ub1(t1)', 'ub2(t1)', 'ub3(t1)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `%I1COSWS

% Cosine function depending on x, t, and a phase constant.
% Interchanging x/? with t/T in the phase factor 2?(x/? -t/T) has no effect on the
% cosine function.We see an equivalent dependence of the cos-function on x/?
% and t/T.
% Two sets of each three functions are shown, they give the same graphs
% when changing the dependence on x or t, using the same range, and leaving
% the other corresponding parameters the same.
% In the way the cosine functions are written, an additional phase factor may
% have its origin in the space or time part, we do not know.

function I1COSWS;
x1=(0:.1:10); Lamda=1; T=10;
A1=1; t1=1; theta1=0.5;
A2=1; t2=2; theta2=0.2;
A3=1; t3=3; theta3=0.1;
ua1=A1*cos(2*pi*((x1./Lamda)-t1/T+theta1));
ua2=A2*cos(2*pi*((x1./Lamda)-t2/T+theta2));
ua3=A3*cos(2*pi*((x1./Lamda)-t3/T+theta3));

figure(1);
subplot(2,1,1);
plot(x1,ua1,x1,ua2,x1,ua3);
axis([0 10 -1 1]);                  % PLOTS LIMITS                    
xlabel('x1','Fontsize',12);
legend('ua1(x1)','ua2(x1)','ua3(x1)');


t1=(0:.1:10); LamdaLamda=10; TT=1;
B1=1; x1=1; psi1=1;
B2=1; x2=2; psi2=1;
B3=1; x3=3; psi3=1;
ub1=B1*cos(2*pi*((x1/LamdaLamda)-t1./TT+psi1));
ub2=B2*cos(2*pi*((x2/LamdaLamda)-t1./TT+psi2));
ub3=B3*cos(2*pi*((x3/LamdaLamda)-t1./TT+psi3));

subplot(2,1,2);
plot(t1,ub1,t1,ub2,t1,ub3);
axis([0 10 -1 1]);                  % PLOTS LIMITS                    
xlabel('t1','Fontsize',12);
legend('ub1(t1)','ub2(t1)','ub3(t1)');






`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'of',
    title: "of - I20ARRAYS\r",
    description: "I20ARRAYS\r",
    category: "Optics - Interference",
    chapter: '2',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I20ARRAYS
# Interference pattern of N sources 

# Parameters: Opening a, Wavelength ? , Number of lines N.
# Graph as function of ?, because of small angle ? = Y/X. Normalization to 1.
# For comparison of maxima, the numerator is plotted separately.


Theta = np.arange(0, 0.5+0.001, 0.001)
Lamda = 0.0005
a = 0.1
aa = 0.2
N = 5
NN = 5
IA1 = (np.sin(np.pi*N*(a/Lamda)*np.sin(2*(np.pi/360)*Theta))/(N*np.sin(np.pi*(a/Lamda)*np.sin(2*(np.pi/360)*Theta))))**2
y = np.sin(np.pi*N*(a/Lamda)*np.sin(2*(np.pi/360)*Theta))**2
y1 = np.sin(np.pi*(a/Lamda)*np.sin(2*(np.pi/360)*Theta))**2
IA2 = (np.sin(np.pi*NN*(aa/Lamda)*np.sin(2*(np.pi/360)*Theta))/(NN*np.sin(np.pi*(aa/Lamda)*np.sin(2*(np.pi/360)*Theta))))**2
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(Theta,IA1,Theta,y,Theta,y1)

plt.xlim(0, 0.5)
plt.ylim(0, 1)

plt.xlabel('\theta')
plt.legend(['IA1(\theta)', 'y(\theta)', 'y1(\theta)'])
plt.subplot(2, 1, 2)

plt.plot(Theta,IA2)

plt.xlim(0, 0.5)
plt.ylim(0, 1)

plt.xlabel('\theta')
plt.legend(['IA2(\theta)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% I20ARRAYS
% Interference pattern of N sources 

% Parameters: Opening a, Wavelength ? , Number of lines N.
% Graph as function of ?, because of small angle ? = Y/X. Normalization to 1.
% For comparison of maxima, the numerator is plotted separately.

function I20ARRAYS;
Theta = (0:0.001:0.5);
Lamda = 0.0005;
a = 0.1;
aa = 0.2;
N = 5;
NN = 5;
IA1 = (sin(pi*N*(a/Lamda)*sin(2*(pi/360)*Theta))./(N*sin(pi*(a/Lamda)*sin(2*(pi/360)*Theta)))).^2;
y = sin(pi*N*(a/Lamda)*sin(2*(pi/360)*Theta)).^2;
y1 = sin(pi*(a/Lamda)*sin(2*(pi/360)*Theta)).^2;
IA2 = (sin(pi*NN*(aa/Lamda)*sin(2*(pi/360)*Theta))./(NN*sin(pi*(aa/Lamda)*sin(2*(pi/360)*Theta)))).^2;

figure(1);
subplot(2,1,1);
plot(Theta,IA1,Theta,y,Theta,y1);
axis([0 0.5 0 1]);
xlabel('\theta');
legend('IA1(\theta)','y(\theta)','y1(\theta)');

subplot(2,1,2);
plot(Theta,IA2);
axis([0 0.5 0 1]);
xlabel('\theta');
legend('IA2(\theta)');
`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'I21RANDS',
    title: "I21RANDS - I21RANDS\r",
    description: "I21RANDS\r",
    category: "Optics - Interference",
    chapter: '2',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I21RANDS

# Addition of exponential-functions with random angles

# The real part of the sum of exp i Theta is plotted.
f = np.arange(1, 100+1, 1)
N = f
k = np.arange(1, 1000+1, 1)
# i = np.sqrt(-1)
Theta = rand(size(k))*2*np.pi
for ind in range(len(f)):
    y(ind)=0
    for k=1:N(ind)
        y(ind) = y(ind) + np.exp(i*(Theta(k)))
    y(ind) = (1/N(ind))*(y(ind))
fig = plt.figure(1)

plt.plot(f,real(y)
)
plt.xlabel('f')
plt.legend(['real(y(f))'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% I21RANDS

% Addition of exponential-functions with random angles
function I21RANDS;
% The real part of the sum of exp i Theta is plotted.
f = (1:1:100);
N = f;
k = (1:1:1000);
% i = sqrt(-1);

Theta = rand(size(k)).*2*pi;

for ind=1:length(f)
    y(ind)=0;
    for k=1:N(ind)
        y(ind) = y(ind) + exp(i*(Theta(k)));
    end;
    y(ind) = (1/N(ind))*(y(ind));
end;
figure(1);
plot(f,real(y));
xlabel('f');
legend('real(y(f))');

`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'I2COSSUPS',
    title: "I2COSSUPS - I2COSSUPS\r",
    description: "I2COSSUPS\r",
    category: "Optics - Interference",
    chapter: '2',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I2COSSUPS

# Superposition of two cosine waves, one having an optical path differnce ? with respect to the
# other. The sum is squared to result in the intensity.

# We are looking at a time instance and graphs are shown for six different path differences.


X = np.arange(0, 4+0.05, 0.05)
Lamda = 1
A = 1
t1 = 0.1
T = 1
delta1 = 0
delta2 = 0.1
delta3 = 0.2
delta4 = 0.3
delta5 = 0.4
delta6 = 0.5
u1 =A*np.cos(2*np.pi*((X/Lamda)-(t1/T))) + A*np.cos(2*np.pi*(((X-delta1)/Lamda)-(t1/T)))
u2 =A*np.cos(2*np.pi*((X/Lamda)-(t1/T))) + A*np.cos(2*np.pi*(((X-delta2)/Lamda)-(t1/T)))
u3 =A*np.cos(2*np.pi*((X/Lamda)-(t1/T))) + A*np.cos(2*np.pi*(((X-delta3)/Lamda)-(t1/T)))
u4 =A*np.cos(2*np.pi*((X/Lamda)-(t1/T))) + A*np.cos(2*np.pi*(((X-delta4)/Lamda)-(t1/T)))
u5 =A*np.cos(2*np.pi*((X/Lamda)-(t1/T))) + A*np.cos(2*np.pi*(((X-delta5)/Lamda)-(t1/T)))
u6 =A*np.cos(2*np.pi*((X/Lamda)-(t1/T))) + A*np.cos(2*np.pi*(((X-delta6)/Lamda)-(t1/T)))
fig = plt.figure(1)

plt.plot(X,u1**2,X,u2**2,X,u3**2,X,u4**2,X,u5**2,X,u6**2)

plt.xlim(0, 4)
plt.ylim(0, 4)
;                  # PLOTS LIMITS                    
xlabel('x','Fontsize',12)
title('Figure 1','FontSize',12)
plt.legend(['(u1(x))^2', '(u2(x))^2', '(u3(x))^2', '(u4(x))^2', '(u5(x))^2', '(u6(x))^2'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% I2COSSUPS

% Superposition of two cosine waves, one having an optical path differnce ? with respect to the
% other. The sum is squared to result in the intensity.

% We are looking at a time instance and graphs are shown for six different path differences.

function I2COSSUPS;

X = (0:0.05:4);
Lamda = 1;
A = 1;
t1 = 0.1;
T = 1;
delta1 = 0;
delta2 = 0.1;
delta3 = 0.2;
delta4 = 0.3;
delta5 = 0.4;
delta6 = 0.5;

u1 =A*cos(2*pi*((X/Lamda)-(t1/T))) + A*cos(2*pi*(((X-delta1)/Lamda)-(t1/T)));
u2 =A*cos(2*pi*((X/Lamda)-(t1/T))) + A*cos(2*pi*(((X-delta2)/Lamda)-(t1/T)));
u3 =A*cos(2*pi*((X/Lamda)-(t1/T))) + A*cos(2*pi*(((X-delta3)/Lamda)-(t1/T)));
u4 =A*cos(2*pi*((X/Lamda)-(t1/T))) + A*cos(2*pi*(((X-delta4)/Lamda)-(t1/T)));
u5 =A*cos(2*pi*((X/Lamda)-(t1/T))) + A*cos(2*pi*(((X-delta5)/Lamda)-(t1/T)));
u6 =A*cos(2*pi*((X/Lamda)-(t1/T))) + A*cos(2*pi*(((X-delta6)/Lamda)-(t1/T)));

figure(1);
plot(X,u1.^2,X,u2.^2,X,u3.^2,X,u4.^2,X,u5.^2,X,u6.^2);
axis([0 4 0 4]);                  % PLOTS LIMITS                    
xlabel('x','Fontsize',12);
title('Figure 1','FontSize',12);
legend('(u1(x))^2','(u2(x))^2','(u3(x))^2','(u4(x))^2','(u5(x))^2','(u6(x))^2');`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'I3COSGRA',
    title: "I3COSGRA - I3COSGRA\r",
    description: "I3COSGRA\r",
    category: "Optics - Interference",
    chapter: '2',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64
from mpl_toolkits.mplot3d import Axes3D

# I3COSGRA

# Superposition of two cosine waves, one having an optical path differnce ? with respect to the
# other. The sum is squared to result in the intensity.

# We are looking at the time dependence, the graphs are plots in space x and time t.
# Period T, path difference ? , wavelength ?.


# 1. Graph for optical path difference corresponding to a maximum
Lamda = 1
A = 1
N = 15
T = 1
Delta1 = 1
i = (0:1:N)
j = (0:1:N)
x = -0.2 + 0.05*i
t1 = -0.2 + 0.05*j
for r in range(len(x)):
    for c in range(len(t1)):
        uc(r,c) = ((2*A*np.cos(2*np.pi*(Delta1/(2*Lamda))))*(np.cos(2*np.pi*(x(r)/Lamda-t1(c)/T)-2*np.pi*(Delta1/(2*Lamda)))))**2
M = uc
fig = plt.figure(1)

plt.subplot(2, 1, 1)

ax = plt.gca()
if not hasattr(ax, 'plot_surface'):
    fig = plt.figure()
    ax = fig.add_subplot(111, projection='3d')
    X, Y = np.meshgrid(np.arange(M.shape[1]), np.arange(M.shape[0]))
    ax.plot_surface(X, Y, M, cmap='viridis')
# 2. Graph for optical path difference corresponding to a minimum
N = 40
i = (0:1:N)
j = (0:1:N)
xx = -0.2+ 0.04*i
t1 = -0.2 + 0.02*j
Delta2 = 0.5
T = 1
for r in range(len(xx)):
    for c in range(len(t1)):
        ud(r,c) = ((2*A*np.cos(2*np.pi*(Delta2/(2*Lamda))))*(np.cos(2*np.pi*(xx(r)/Lamda-t1(c)/T)-2*np.pi*(Delta2/(2*Lamda)))))**2
MM = ud
plt.subplot(2, 1, 2)

ax = plt.gca()
if not hasattr(ax, 'plot_surface'):
    fig = plt.figure()
    ax = fig.add_subplot(111, projection='3d')
    X, Y = np.meshgrid(np.arange(MM.shape[1]), np.arange(MM.shape[0]))
    ax.plot_surface(X, Y, MM, cmap='viridis')

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% I3COSGRA

% Superposition of two cosine waves, one having an optical path differnce ? with respect to the
% other. The sum is squared to result in the intensity.

% We are looking at the time dependence, the graphs are plots in space x and time t.
% Period T, path difference ? , wavelength ?.

function I3COSGRA;
% 1. Graph for optical path difference corresponding to a maximum
Lamda = 1;
A = 1;
N = 15;
T = 1;
Delta1 = 1;

i = (0:1:N);
j = (0:1:N);
x = -0.2 + 0.05*i;
t1 = -0.2 + 0.05*j;

for r=1:length(x);
    for c=1:length(t1);
        uc(r,c) = ((2*A*cos(2*pi*(Delta1/(2*Lamda))))*(cos(2*pi*(x(r)/Lamda-t1(c)/T)-2*pi*(Delta1/(2*Lamda)))))^2;
    end;
end;

M = uc;

figure(1);
subplot(2,1,1);
mesh(M);

% 2. Graph for optical path difference corresponding to a minimum
N = 40;
i = (0:1:N);
j = (0:1:N);

xx = -0.2+ 0.04*i;
t1 = -0.2 + 0.02*j;
Delta2 = 0.5;
T = 1;

for r=1:length(xx);
    for c=1:length(t1);
        ud(r,c) = ((2*A*cos(2*pi*(Delta2/(2*Lamda))))*(cos(2*pi*(xx(r)/Lamda-t1(c)/T)-2*pi*(Delta2/(2*Lamda)))))^2;
    end;
end;
MM = ud;

subplot(2,1,2);
mesh(MM);`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'I4COSINTS',
    title: "I4COSINTS - I4COSINTS\r",
    description: "I4COSINTS\r",
    category: "Optics - Interference",
    chapter: '2',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I4COSINTS
# Intensity in real and complex notation
# Real notation for maxima

x = np.arange(0, 4+0.01, 0.01)
Lamda = 1
A = 1
t = 1
T = 10
Delta = 0
u = A*np.cos(2*np.pi*(x/Lamda-t/T)) +A*np.cos(2*np.pi*((x-Delta)/Lamda-t/T))
fig = plt.figure(1)

plt.subplot(3, 2, 1)

plt.plot(x,u)

plt.xlim(0, 4)
plt.ylim(-2, 2)

plt.xlabel('x')
plt.legend(['u(x)'])
plt.subplot(3, 2, 2)

plt.plot(x,u**2)

plt.xlim(0, 4)
plt.ylim(0, 4)

plt.xlabel('x')
plt.legend(['(u(x))^2'])
# The time average of the intensity is 1/2 of the maximum value 4
t = 1
# Complex notation
# i = np.sqrt(-1)
z = np.exp(i*2*np.pi*(x/Lamda-t/T))+A*np.exp(i*2*np.pi*((x-Delta)/Lamda-t/T))
# The real part of z(x) is real(z(x))
plt.subplot(3, 2, 3)

plt.plot(x,real(z)
)
plt.xlim(0, 4)
plt.ylim(-2, 2)

plt.xlabel('x')
plt.legend(['real(z(x))'])
# The real part squared is (real(z(x)))**2

plt.subplot(3, 2, 4)

plt.plot(x,real(z)
**2)
plt.xlim(0, 4)
plt.ylim(0, 4)

plt.xlabel('x')
plt.legend(['real(z(x))^2'])
# When taking z time z*, the time dependence is automatically eliminated and we get
# twice of the average value.

plt.subplot(3, 2, 5)

plt.plot(x,z*conj(z)
)
plt.xlim(0, 4)
plt.ylim(3.995, 4.005)

plt.xlabel('x')
plt.legend(['z(x)*conj(z(x))'])
# Complex notation and dependance on the optical path difference DeltaDelta
x = 1
DeltaDelta = np.arange(0, 5+0.01, 0.01)
zz = np.exp(i*2*np.pi*(x/Lamda-t/T))+A*np.exp(i*2*np.pi*((x-DeltaDelta)/Lamda-t/T))
plt.subplot(3, 2, 6)

plt.plot(DeltaDelta,zz*conj(zz)
)
plt.xlim(0, 6)
plt.ylim(0, 4)

plt.xlabel('\delta\delta')
plt.legend(['zz(\delta\delta)*conj(zz(\delta\delta))'])
# We see the "fringe pattern"
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% I4COSINTS
% Intensity in real and complex notation
% Real notation for maxima
function I4COSINTS;
x = (0:0.01:4);
Lamda = 1;
A = 1;
t = 1;
T = 10;
Delta = 0;
u = A*cos(2*pi*(x/Lamda-t/T)) +A*cos(2*pi*((x-Delta)/Lamda-t/T));

figure(1);
subplot(3,2,1);
plot(x,u);
axis([0 4 -2 2]);
xlabel('x');
legend('u(x)');

subplot(3,2,2);
plot(x,u.^2);
axis([0 4 0 4]);
xlabel('x');
legend('(u(x))^2');


% The time average of the intensity is 1/2 of the maximum value 4
t = 1;

% Complex notation
% i = sqrt(-1)
z = exp(i*2*pi*(x/Lamda-t/T))+A*exp(i*2*pi*((x-Delta)/Lamda-t/T));
% The real part of z(x) is real(z(x))
subplot(3,2,3);
plot(x,real(z));
axis([0 4 -2 2]);
xlabel('x');
legend('real(z(x))');

% The real part squared is (real(z(x)))^2

subplot(3,2,4);
plot(x,real(z).^2);
axis([0 4 0 4]);
xlabel('x');
legend('real(z(x))^2');

% When taking z time z*, the time dependence is automatically eliminated and we get
% twice of the average value.

subplot(3,2,5);
plot(x,z.*conj(z));
axis([0 4 3.995 4.005]);
xlabel('x');
legend('z(x)*conj(z(x))');

% Complex notation and dependance on the optical path difference DeltaDelta
x = 1;
DeltaDelta = (0:0.01:5);
zz = exp(i*2*pi*(x/Lamda-t/T))+A*exp(i*2*pi*((x-DeltaDelta)/Lamda-t/T));

subplot(3,2,6);
plot(DeltaDelta,zz.*conj(zz));
axis([0 6 0 4]);
xlabel('\delta\delta');
legend('zz(\delta\delta)*conj(zz(\delta\delta))');
% We see the "fringe pattern"`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'I5YOUNGS',
    title: "I5YOUNGS - I5YOUNGS\r",
    description: "I5YOUNGS\r",
    category: "Optics - Interference",
    chapter: '2',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I5YOUNGS
# Young's Experiment


Con = 1
Lamda = 0.0005
a = 0.4
X = 4000
Y = np.arange(-10, 10+0.1, 0.1); # All length in mm
I = Con*(np.cos(np.pi*((Y*a)/(Lamda*X)))**2)
fig = plt.figure(1)

plt.plot(Y,I)

plt.xlim(-10, 10)
plt.ylim(0, 1)

plt.xlabel('Y')
plt.legend(['I(Y)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% I5YOUNGS
% Young's Experiment

function I5YOUNGS;

Con = 1;
Lamda = 0.0005;
a = 0.4;
X = 4000;
Y = (-10:0.1:10); % All length in mm
I = Con*(cos(pi*((Y*a)/(Lamda*X))).^2);

figure(1);
plot(Y,I);
axis([-10 10 0 1]);
xlabel('Y');
legend('I(Y)');
`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'I6LOYDS',
    title: "I6LOYDS - I6LOYDS\r",
    description: "I6LOYDS\r",
    category: "Optics - Interference",
    chapter: '2',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I6LOYDS
# Lloyd's mirror experiment


Con = 1
# All length in mm
a = 0.4
X = 4000
Lamda = 0.0005
Y = np.arange(-10, 10+0.1, 0.1)
I = Con*(np.cos(np.pi*((Y*a)/(Lamda*X)+np.pi/2))**2)
fig = plt.figure(1)

plt.plot(Y,I)

plt.xlim(-10, 10)
plt.ylim(0, 1)

plt.xlabel('Y')
plt.legend(['I(Y)'])
# We see that at Y=0 Young's experiment has a maximum, Lloyd's a minimum.
# For Young and Lloyd: The position of maxima are changed by changing d and ?, X is
# considered fixed.
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% I6LOYDS
% Lloyd's mirror experiment

function I6LOYDS;
Con = 1;
% All length in mm
a = 0.4;
X = 4000;
Lamda = 0.0005;
Y = (-10:0.1:10);

I = Con*(cos(pi*((Y*a)/(Lamda*X)+pi/2)).^2);

figure(1);
plot(Y,I);
axis([-10 10 0 1]);
xlabel('Y');
legend('I(Y)');

% We see that at Y=0 Young's experiment has a maximum, Lloyd's a minimum.
% For Young and Lloyd: The position of maxima are changed by changing d and ?, X is
% considered fixed.`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'I7FREMIRS',
    title: "I7FREMIRS - I7FREMIRS\r",
    description: "I7FREMIRS\r",
    category: "Optics - Interference",
    chapter: '2',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I7FREMIRS
# Fresnel's mirror

# 1. Fresnel's Mirror
# Y, c, f, b, and ? in mm, ? in Radc
# is about b for calculation of X = c + f
# All length in mm
Con = 1
b = 1000
f = 5000
Beta = 0.0002
Lamda = 0.0005
c = b * np.cos(Beta)
Y = np.arange(-10, 10+0.1, 0.1)
I = Con*(np.cos(np.pi*((Y*2*(b/(c+f))*np.sin(Beta))/Lamda))**2)
fig = plt.figure(1)

plt.plot(Y,I)

plt.xlim(-10, 10)
plt.ylim(0, 1)

plt.xlabel('Y')
plt.legend(['I(Y)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% I7FREMIRS
% Fresnel's mirror
function I7FREMIRS;
% 1. Fresnel's Mirror
% Y, c, f, b, and ? in mm, ? in Radc
% is about b for calculation of X = c + f
% All length in mm
Con = 1;
b = 1000;
f = 5000;
Beta = 0.0002;
Lamda = 0.0005;
c = b * cos(Beta);
Y = (-10:0.1:10);
I = Con*(cos(pi*((Y*2*(b/(c+f))*sin(Beta))/Lamda)).^2);

figure(1);
plot(Y,I);
axis([-10 10 0 1]);
xlabel('Y');
legend('I(Y)');

`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'I8FRYOLOS',
    title: "I8FRYOLOS - I8FRYOLOS\r",
    description: "I8FRYOLOS\r",
    category: "Optics - Interference",
    chapter: '2',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I8FRYOLOS
# Fresnel's mirror, Young's double slit, and Lloyd's mirror,

# 1. Fresnel's Mirror  
# Y, c, f, b, and ? in mm, ? in Radc
# is about b for calculation of X = c + f
# All length in mm
Con = 1
b = 1000
f = 5000
Beta = 0.0002
Lamda = 0.0005
c = b*np.cos(Beta)
Y = np.arange(-10, 10+0.1, 0.1)
IF = Con*(np.cos(np.pi*((Y*2*(b/(c+f))*np.sin(Beta))/Lamda))**2)
# 2. Young's Experiment
a = 0.4
X = 4000
IY = Con*(np.cos(np.pi*((Y*a)/(Lamda*X)))**2)
# 3. Lloyd's Mirror (same as Yound, phase term is added)
IL = Con*(np.cos(np.pi*((Y*a)/(Lamda*X))+np.pi/2)**2)
fig = plt.figure(1)

plt.plot(Y,IF,Y,IY,Y,IL)

plt.xlim(-10, 10)
plt.ylim(0, 1)

plt.xlabel('Y')
plt.legend(['IF(Y)', 'IY(Y)', 'IL(Y)'])
# We see that at Y=0 Young has a maximum, Lloyd a minimum
# For Young and Lloyd: The position of maxima are changed by changing d and ?, X is
# considered fixed.

# For Fresnel, a,b are fixed, position of fringes changes with ? and ?.



# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% I8FRYOLOS
% Fresnel's mirror, Young's double slit, and Lloyd's mirror,
function I8FRYOLOS;
% 1. Fresnel's Mirror  
% Y, c, f, b, and ? in mm, ? in Radc
% is about b for calculation of X = c + f
% All length in mm
Con = 1;
b = 1000;
f = 5000;
Beta = 0.0002;
Lamda = 0.0005;
c = b*cos(Beta);
Y = (-10:0.1:10);

IF = Con*(cos(pi*((Y*2*(b/(c+f))*sin(Beta))/Lamda)).^2);

% 2. Young's Experiment
a = 0.4;
X = 4000;
IY = Con*(cos(pi*((Y*a)/(Lamda*X))).^2);

% 3. Lloyd's Mirror (same as Yound, phase term is added)
IL = Con*(cos(pi*((Y*a)/(Lamda*X))+pi/2).^2);

figure(1);
plot(Y,IF,Y,IY,Y,IL);
axis([-10 10 0 1]);
xlabel('Y');
legend('IF(Y)','IY(Y)','IL(Y)');


% We see that at Y=0 Young has a maximum, Lloyd a minimum
% For Young and Lloyd: The position of maxima are changed by changing d and ?, X is
% considered fixed.

% For Fresnel, a,b are fixed, position of fringes changes with ? and ?.


`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'I9PLANS',
    title: "I9PLANS - I9PLANS\r",
    description: "I9PLANS\r",
    category: "Optics - Interference",
    chapter: '2',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I9PLANS

# Fringes of plane parallel plate produced by two waves


# 1.For normal incidence depending on D
Lamda = 0.0005
n2 = 1.5
D = np.arange(-0.00051, 0.005+0.00001, 0.00001)
I1 = np.cos((2*np.pi*D*n2)/Lamda + np.pi/2)**2
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(D,I1)

plt.xlim(-0.001, 0.005)
plt.ylim(0, 1)

plt.xlabel('D')
plt.legend(['I1(D)'])
# 2. For normal incidence depending on Lamda

LamdaLamda = np.arange(0.05, 0.5+0.001, 0.001)
DD = 0.05
I2 = np.cos((2*np.pi*DD*(n2))/LamdaLamda + np.pi/2)**2
plt.subplot(2, 1, 2)

plt.plot(LamdaLamda,I2)

plt.xlim(0, 0.5)
plt.ylim(0, 1)

plt.xlabel('\lambda\lambda')
plt.legend(['I2(\lambda\lambda)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% I9PLANS

% Fringes of plane parallel plate produced by two waves

function I9PLANS;
% 1.For normal incidence depending on D
Lamda = 0.0005;
n2 = 1.5;
D = (-0.00051:0.00001:0.005);
I1 = cos((2*pi*D*n2)/Lamda + pi/2).^2;

figure(1);
subplot(2,1,1);
plot(D,I1);
axis([-0.001 0.005 0 1]);
xlabel('D');
legend('I1(D)');

% 2. For normal incidence depending on Lamda

LamdaLamda = (0.05:0.001:0.5);
DD = 0.05;
I2 = cos((2*pi*DD*(n2))./LamdaLamda + pi/2).^2;

subplot(2,1,2);
plot(LamdaLamda,I2);
axis([0 0.5 0 1]);
xlabel('\lambda\lambda');
legend('I2(\lambda\lambda)');`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'D10FAGRDSLS',
    title: "D10FAGRDSLS - D10FAGRDSLS\r",
    description: "D10FAGRDSLS\r",
    category: "Optics - Diffraction",
    chapter: '3',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# D10FAGRDSLS
# Diffraction on an amplitude grating at normal incidence.
# Width of openings d, center to center distance of strips a, wavelength ????, distance
# from grating to screen X and coordinate on Screen Y.
# All distances and wavelength in mm, number of lines N.
# All parameters are globally defined above the graph.
# D(A) is the diffraction factor
# I(A) is the interference factor, normalized to 1.
# P(A) is the product of interference and diffraction factor.


Y = np.arange(-800, 800+0.1, 0.1)
X = 4000
d = 0.02
Lamda = 0.0005
a = 0.2
N = 2
D = (np.sin(np.pi*(d/Lamda)*(Y/X))/(np.pi*(d/Lamda)*(Y/X)))**2
I = (np.sin(np.pi*(a/Lamda)*(Y/X)*N)/(N*np.sin(np.pi*(a/Lamda)*(Y/X))))**2
P = D*I
fig = plt.figure(1)

plt.plot(Y,D,Y,P)

plt.xlim(-600, 600)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('Y')
plt.legend(['D(Y)', 'P(Y)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% D10FAGRDSLS
% Diffraction on an amplitude grating at normal incidence.
% Width of openings d, center to center distance of strips a, wavelength ????, distance
% from grating to screen X and coordinate on Screen Y.
% All distances and wavelength in mm, number of lines N.
% All parameters are globally defined above the graph.
% D(A) is the diffraction factor
% I(A) is the interference factor, normalized to 1.
% P(A) is the product of interference and diffraction factor.

function D10FAGRDSLS;

Y = (-800:0.1:800);
X = 4000;
d = 0.02;
Lamda = 0.0005;
a = 0.2;
N = 2;
D = (sin(pi*(d/Lamda)*(Y/X))./(pi*(d/Lamda)*(Y/X))).^2;
I = (sin(pi*(a/Lamda)*(Y/X)*N)./(N*sin(pi*(a/Lamda)*(Y/X)))).^2;
P = D.*I;

figure(1);
plot(Y,D,Y,P);
axis([-600 600 0 1]);                  % PLOTS LIMITS                    
xlabel('Y');
legend('D(Y)','P(Y)');

`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'D11FAGRANGS',
    title: "D11FAGRANGS - D11FAGRANGS\r",
    description: "D11FAGRANGS\r",
    category: "Optics - Diffraction",
    chapter: '3',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# D11FAGRANGS
# Diffraction on an amplitude grating. Non normal incidence
# with angle ? with respect to the normal.
# Width of grating openings d, center to center distance of strips a,
# wavelength ?, distance from grating to screen X and coordinate on Screen Y.
# All distances and wavelength in mm, number of lines N .
# All parameters are globally defined above the graph.
# D(A) is the diffraction factor
# I(A) is the interference factor, normalized to 1. The numerator is plotted
# separately to show where the main maxima are located (0/0).
# P(A) is the product of interference and diffraction factor.

# The angle y shifts the zeroth order from 0 for y = 0 to .2 for y = -.2


Theta = np.arange(-0.5001, 0.5+0.0002, 0.0002)
d = 0.001
Lamda = 0.0005
a = 0.002
N = 6
Psi = -0.2
D = (np.sin(np.pi*(d/Lamda)*(np.sin(Theta)+np.sin(Psi)))/(np.pi*(d/Lamda)*(np.sin(Theta)+np.sin(Psi))))**2
I = (np.sin(np.pi*(a/Lamda)*(np.sin(Theta)+np.sin(Psi))*N)/(N*np.sin(np.pi*(a/Lamda)*(np.sin(Theta)+np.sin(Psi)))))**2
P = D*I
fig = plt.figure(1)

plt.plot(Theta,I,Theta,D,Theta,P)

plt.xlim(-0.6, 0.6)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('\theta')
plt.legend(['I(\theta)', 'D(\theta)', 'P(\theta)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% D11FAGRANGS
% Diffraction on an amplitude grating. Non normal incidence
% with angle ? with respect to the normal.
% Width of grating openings d, center to center distance of strips a,
% wavelength ?, distance from grating to screen X and coordinate on Screen Y.
% All distances and wavelength in mm, number of lines N .
% All parameters are globally defined above the graph.
% D(A) is the diffraction factor
% I(A) is the interference factor, normalized to 1. The numerator is plotted
% separately to show where the main maxima are located (0/0).
% P(A) is the product of interference and diffraction factor.

% The angle y shifts the zeroth order from 0 for y = 0 to .2 for y = -.2

function D11FAGRANGS;

Theta = (-0.5001:0.0002:0.5);
d = 0.001;
Lamda = 0.0005;
a = 0.002;
N = 6;
Psi = -0.2;

D = (sin(pi*(d/Lamda)*(sin(Theta)+sin(Psi)))./(pi*(d/Lamda)*(sin(Theta)+sin(Psi)))).^2;
I = (sin(pi*(a/Lamda)*(sin(Theta)+sin(Psi))*N)./(N*sin(pi*(a/Lamda)*(sin(Theta)+sin(Psi))))).^2;
P = D.*I;


figure(1);
plot(Theta,I,Theta,D,Theta,P);
axis([-0.6 0.6 0 1]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('I(\theta)','D(\theta)','P(\theta)');
`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'D12FAELGRS',
    title: "D12FAELGRS - D12FAELGRS\r",
    description: "D12FAELGRS\r",
    category: "Optics - Diffraction",
    chapter: '3',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# D12FAELGRS

# Diffraction on an echelette grating.
# The graphs for three different values of ?.

# D(?) is the diffraction factor, I(?) the interfference factor, and P(?) the product.
# The angle in radians of the echelle is ?.Diffraction angle ? in radians,
# wavelength ?, width of openings d, and separation of openings a in mm.
# N is the number of lines.
# All parameters are defined globally above the graph.


Theta = np.arange(-1.301, 1.3+0.002, 0.002)
Epsilon1 = -0.25
Epsilon2 = 0.25
Epsilon3 = -0.52
d = 37
Lamda = 10
a = 40
N = 20
D1 = (np.sin(np.pi*(d/Lamda)*np.sin(Theta + Epsilon1))/(np.pi*(d/Lamda)*np.sin(Theta+Epsilon1)))**2
D2 = (np.sin(np.pi*(d/Lamda)*np.sin(Theta + Epsilon2))/(np.pi*(d/Lamda)*np.sin(Theta+Epsilon2)))**2
D3 = (np.sin(np.pi*(d/Lamda)*np.sin(Theta + Epsilon3))/(np.pi*(d/Lamda)*np.sin(Theta+Epsilon3)))**2
I = (np.sin(np.pi*a*np.sin(Theta)*N/Lamda)/(N*np.sin(np.pi*a*np.sin(Theta)/Lamda)))**2
P1 = D1*I
P2 = D2*I
P3 = D3*I
fig = plt.figure(1)

plt.subplot(3, 1, 1)

plt.plot(Theta,D1,Theta,I,Theta,P1)

plt.xlim(-1.5, 1.5)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('\theta')
plt.legend(['D1(\theta)', 'I(\theta)', 'P1(\theta)'])
plt.subplot(3, 1, 2)

plt.plot(Theta,D2,Theta,I,Theta,P2)

plt.xlim(-1.5, 1.5)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('\theta')
plt.legend(['D2(\theta)', 'I(\theta)', 'P2(\theta)'])
plt.subplot(3, 1, 3)

plt.plot(Theta,D3,Theta,I,Theta,P3)

plt.xlim(-1.5, 1.5)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('\theta')
plt.legend(['D3(\theta)', 'I(\theta)', 'P3(\theta)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% D12FAELGRS

% Diffraction on an echelette grating.
% The graphs for three different values of ?.

% D(?) is the diffraction factor, I(?) the interfference factor, and P(?) the product.
% The angle in radians of the echelle is ?.Diffraction angle ? in radians,
% wavelength ?, width of openings d, and separation of openings a in mm.
% N is the number of lines.
% All parameters are defined globally above the graph.

function D12FAELGRS;

Theta = (-1.301:0.002:1.3);
Epsilon1 = -0.25;
Epsilon2 = 0.25;
Epsilon3 = -0.52;

d = 37;
Lamda = 10;
a = 40;
N = 20;

D1 = (sin(pi*(d/Lamda)*sin(Theta + Epsilon1))./(pi*(d/Lamda)*sin(Theta+Epsilon1))).^2;
D2 = (sin(pi*(d/Lamda)*sin(Theta + Epsilon2))./(pi*(d/Lamda)*sin(Theta+Epsilon2))).^2;
D3 = (sin(pi*(d/Lamda)*sin(Theta + Epsilon3))./(pi*(d/Lamda)*sin(Theta+Epsilon3))).^2;

I = (sin(pi*a*sin(Theta)*N/Lamda)./(N*sin(pi*a*sin(Theta)/Lamda))).^2;

P1 = D1.*I;
P2 = D2.*I;
P3 = D3.*I;

figure(1);
subplot(3,1,1);
plot(Theta,D1,Theta,I,Theta,P1);
axis([-1.5 1.5 0 1]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('D1(\theta)','I(\theta)','P1(\theta)');


subplot(3,1,2);
plot(Theta,D2,Theta,I,Theta,P2);
axis([-1.5 1.5 0 1]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('D2(\theta)','I(\theta)','P2(\theta)');


subplot(3,1,3);
plot(Theta,D3,Theta,I,Theta,P3);
axis([-1.5 1.5 0 1]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('D3(\theta)','I(\theta)','P3(\theta)');

`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'D13FAGRRES',
    title: "D13FAGRRES - D13FAGRRES\r",
    description: "D13FAGRRES\r",
    category: "Optics - Diffraction",
    chapter: '3',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# D13FAGRRES
# Two diffraction pattern of a grating to study resolution.

# Diffraction on an amplitude grating with width of openings d, center to center
# distance of strips a, wavelength ?, distance from grating to screen X and
# coordinate on screen Y.
# All distances and wavelength in mm, number of lines N. Normal incidence.
# All parameters are globally defined above the graph.
# P(A) is the product of interference and diffraction factor.
# The resolution is given as ?/?? = N and introduced in the formulas of the
# second grating.


Theta = np.arange(-0.7001, 0.7+0.0002, 0.0002)
d = 0.0001
Lamda = 0.0005
LamdaLamda = 0.0006
a = 0.002
N = 6
D = (np.sin(np.pi*(d/Lamda)*np.sin(Theta))/(np.pi*(d/Lamda)*np.sin(Theta)))**2
DD = (np.sin(np.pi*(d/LamdaLamda)*np.sin(Theta))/(np.pi*(d/LamdaLamda)*np.sin(Theta)))**2
I= (np.sin(np.pi*(a/Lamda)*np.sin(Theta)*N)/(N*np.sin(np.pi*(a/Lamda)*np.sin(Theta))))**2
II= (np.sin(np.pi*(a/LamdaLamda)*np.sin(Theta)*N)/(N*np.sin(np.pi*(a/LamdaLamda)*np.sin(Theta))))**2
P = D*I
PP = DD*II
fig = plt.figure(1)

plt.plot(Theta,P,Theta,PP)

plt.xlim(-0.8, 0.8)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('\theta')
plt.legend(['P(\theta)', 'PP(\theta)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% D13FAGRRES
% Two diffraction pattern of a grating to study resolution.

% Diffraction on an amplitude grating with width of openings d, center to center
% distance of strips a, wavelength ?, distance from grating to screen X and
% coordinate on screen Y.
% All distances and wavelength in mm, number of lines N. Normal incidence.
% All parameters are globally defined above the graph.
% P(A) is the product of interference and diffraction factor.
% The resolution is given as ?/?? = N and introduced in the formulas of the
% second grating.

function D13FAGRRES;

Theta = (-0.7001:0.0002:0.7);
d = 0.0001;
Lamda = 0.0005;
LamdaLamda = 0.0006;
a = 0.002;
N = 6;


D = (sin(pi*(d/Lamda)*sin(Theta))./(pi*(d/Lamda)*sin(Theta))).^2;
DD = (sin(pi*(d/LamdaLamda)*sin(Theta))./(pi*(d/LamdaLamda)*sin(Theta))).^2;

I= (sin(pi*(a/Lamda)*sin(Theta)*N)./(N*sin(pi*(a/Lamda)*sin(Theta)))).^2;
II= (sin(pi*(a/LamdaLamda)*sin(Theta)*N)./(N*sin(pi*(a/LamdaLamda)*sin(Theta)))).^2;

P = D.*I;
PP = DD.*II;

figure(1);
plot(Theta,P,Theta,PP);
axis([-0.8 0.8 0 1]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('P(\theta)','PP(\theta)');

`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'D14FAGRRES3DS',
    title: "D14FAGRRES3DS - D14FAGRRES3DS\r",
    description: "D14FAGRRES3DS\r",
    category: "Optics - Diffraction",
    chapter: '3',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64
from mpl_toolkits.mplot3d import Axes3D

# D14FAGRRES3DS
# Determination of the wavelength difference for two peaks,
# resolved according to the Rayleigh criterion

# 1. Determination of Rayleigh distantance.
# We call the distance between the maxima b. Radius of apertures a, distance
# between the apertures d, coordinate on the observation screen R,
# wavelength ?, and distance from aperture to screen X.


a = 0.05; X = 4000; R=np.arange(0, 50+0.1, 0.1); b = 24.5;%?
Lamda = 0.0005
g1=(besselj(1,(2*np.pi*a*R/(X*Lamda)))/(2*np.pi*a*R/(X*Lamda)))**2
gg1=(besselj(1,(2*np.pi*a*(R-b)/(X*Lamda)))/(2*np.pi*a*(R-b)/(X*Lamda)))**2
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(R,g1,R,gg1)

plt.xlim(0, 50)
plt.ylim(0, 0.3)
;                  # PLOTS LIMITS                    
plt.xlabel('R')
plt.legend(['g1(R)', 'gg1(R)'])
# 2. 3D Graph of pattern of two round apertures at distance b.


X = 4000
N = 40
I = 0:N
J = 0:N
nx = length(I)
ny = length(J)
g2 = zeros(nx,ny)
gg2 = zeros(nx,ny)
M = zeros(nx,ny)
for r=1:nx
        for c=1:ny
            Xi = -30 + 2.0001*r
            Yi = -30 + 2.0001*c
            RR = np.sqrt(Xi**2+Yi**2)
            g2(r,c) = (besselj(1,(2*np.pi*a*RR/(X*Lamda)))/(2*np.pi*a*RR/(X*Lamda)))**2
            RR = np.sqrt(Xi**2+(Yi-b)**2)
            gg2(r,c) = (besselj(1,(2*np.pi*a*RR/(X*Lamda)))/(2*np.pi*a*RR/(X*Lamda)))**2
M = g2 + gg2
plt.subplot(2, 1, 2)

ax = plt.gca()
if not hasattr(ax, 'plot_surface'):
    fig = plt.figure()
    ax = fig.add_subplot(111, projection='3d')
    X, Y = np.meshgrid(np.arange(M.shape[1]), np.arange(M.shape[0]))
    ax.plot_surface(X, Y, M, cmap='viridis')
# PLOTS LIMITS                    
axis([0 40 0 40 0 0.3])
# 3. Calculation of wavelength difference corresponding to b
# The diffraction angle is calculated from b/X = ??
# The grating is made of round apertures of diameter a and spaced at
# distance d.
# From the grating formula we have for the wavelength difference
# ??=d?? or ?? = (d/X)b.
# # For d := .1
# ?? := d*b/X
# ?? = 6.125 * 10 ** (-4)
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% D14FAGRRES3DS
% Determination of the wavelength difference for two peaks,
% resolved according to the Rayleigh criterion

% 1. Determination of Rayleigh distantance.
% We call the distance between the maxima b. Radius of apertures a, distance
% between the apertures d, coordinate on the observation screen R,
% wavelength ?, and distance from aperture to screen X.

function D14FAGRRES3DS;

a = 0.05; X = 4000; R=(0:0.1:50); b = 24.5;%?
Lamda = 0.0005;
g1=(besselj(1,(2*pi*a*R/(X*Lamda)))./(2*pi*a*R/(X*Lamda))).^2;
gg1=(besselj(1,(2*pi*a*(R-b)/(X*Lamda)))./(2*pi*a*(R-b)/(X*Lamda))).^2;

figure(1);
subplot(2,1,1);
plot(R,g1,R,gg1);
axis([0 50 0 0.3]);                  % PLOTS LIMITS                    
xlabel('R');
legend('g1(R)','gg1(R)');


% 2. 3D Graph of pattern of two round apertures at distance b.


X = 4000;
N = 40;

I = 0:N;
J = 0:N;

nx = length(I);
ny = length(J);
g2 = zeros(nx,ny);
gg2 = zeros(nx,ny);
M = zeros(nx,ny);
for r=1:nx;
        for c=1:ny;
            Xi = -30 + 2.0001*r; 
            Yi = -30 + 2.0001*c;
            RR = sqrt(Xi^2+Yi^2);               
            g2(r,c) = (besselj(1,(2*pi*a*RR/(X*Lamda)))/(2*pi*a*RR/(X*Lamda)))^2;
            RR = sqrt(Xi^2+(Yi-b)^2);
            gg2(r,c) = (besselj(1,(2*pi*a*RR/(X*Lamda)))/(2*pi*a*RR/(X*Lamda)))^2;
        end;
end;
M = g2 + gg2;
subplot(2,1,2);
mesh(M);
                 % PLOTS LIMITS                    
axis([0 40 0 40 0 0.3]);


% 3. Calculation of wavelength difference corresponding to b
% The diffraction angle is calculated from b/X = ??
% The grating is made of round apertures of diameter a and spaced at
% distance d.
% From the grating formula we have for the wavelength difference
% ??=d?? or ?? = (d/X)b.
% 
% For d := .1
%            ?? := d*b/X
%                       ?? = 6.125 * 10 ^ (-4)`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'D15FABAGRS',
    title: "D15FABAGRS - D15FABAGRS\r",
    description: "D15FABAGRS\r",
    category: "Optics - Diffraction",
    chapter: '3',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# D15FABAGRS

# Babinets Theorem. Diffraction on two amplitude gratings, one with width of
# openings d1, the other with width of opening d2, and both have center to center
# distance of strips a = d1 +d2.


# Diffraction pattern of the two complementary screens, one is a grating of width
# of opening d1 the other of d2, and the periodicity constant is a = d1 + d2
# Wavelength ?, distance from gratings to screen X and coordinate on
# screen Y. All distances and wavelength in mm, both have number of lines N .Normal
# incidence.

# D1 and D2 are the diffraction factors, I is the interference factor, normalized to 1.
# P(A) is the product of Interference and diffraction factor.

# We see that the intensity of the diffraction peaks is different for the two
# complementarypattern, but the position of the peaks is the same, and
# that is what Babinets Principle tells us.


Theta = np.arange(-0.5001, 0.5+0.0002, 0.0002)
Lamda = 0.0005
N = 6
d1 = 0.002
d2 = 0.001
a = d1 + d2
D1 = (np.sin(np.pi*(d1/Lamda)*np.sin(Theta))/(np.pi*(d1/Lamda)*np.sin(Theta)))**2
D2 = (np.sin(np.pi*(d2/Lamda)*np.sin(Theta))/(np.pi*(d2/Lamda)*np.sin(Theta)))**2
I = (np.sin(np.pi*(a/Lamda)*np.sin(Theta)*N)/(N*np.sin(np.pi*(a/Lamda)*np.sin(Theta))))**2
P1 = D1*I
P2 = D2*I
fig = plt.figure(1)

plt.plot(Theta,P1,Theta,P2,Theta,D1,Theta,D2)

plt.xlim(-0.6, 0.6)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('\theta')
plt.legend(['P1(\theta)', 'P2(\theta)', 'D1(\theta)', 'D2(\theta)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% D15FABAGRS

% Babinets Theorem. Diffraction on two amplitude gratings, one with width of
% openings d1, the other with width of opening d2, and both have center to center
% distance of strips a = d1 +d2.


% Diffraction pattern of the two complementary screens, one is a grating of width
% of opening d1 the other of d2, and the periodicity constant is a = d1 + d2
% Wavelength ?, distance from gratings to screen X and coordinate on
% screen Y. All distances and wavelength in mm, both have number of lines N .Normal
% incidence.

% D1 and D2 are the diffraction factors, I is the interference factor, normalized to 1.
% P(A) is the product of Interference and diffraction factor.

% We see that the intensity of the diffraction peaks is different for the two
% complementarypattern, but the position of the peaks is the same, and
% that is what Babinets Principle tells us.

function D15FABAGRS;

Theta = (-0.5001:0.0002:0.5); 
Lamda = 0.0005;
N = 6;

d1 = 0.002;
d2 = 0.001;
a = d1 + d2;


D1 = (sin(pi*(d1/Lamda)*sin(Theta))./(pi*(d1/Lamda)*sin(Theta))).^2;
D2 = (sin(pi*(d2/Lamda)*sin(Theta))./(pi*(d2/Lamda)*sin(Theta))).^2;

I = (sin(pi*(a/Lamda)*sin(Theta)*N)./(N*sin(pi*(a/Lamda)*sin(Theta)))).^2;

P1 = D1.*I;
P2 = D2.*I;

figure(1);
plot(Theta,P1,Theta,P2,Theta,D1,Theta,D2);
axis([-0.6 0.6 0 1]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('P1(\theta)','P2(\theta)','D1(\theta)','D2(\theta)');
`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'D16FAGRRANS',
    title: "D16FAGRRANS - D16FAGRRANS\r",
    description: "D16FAGRRANS\r",
    category: "Optics - Diffraction",
    chapter: '3',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# D16FAGRRANS
# One dimensional periodic and random arrangement for interference and
# diffraction
# Diffraction on an amplitude grating with width of openings d, center to center
# distance of strips a, wavelength ?, distance from grating to screen X and coordinate on
# screen Y. All distances and wavelength in mm, number of lines N .Normal incidence.
# All parameters are globally defined above the graph.
# D(?) is the diffraction factor
# I(?) is the interference factor, normalized to 1.
# P1(?) is the product of interference and diffraction factor.
# P2(?) is for the case that the lines are not periodic and the interfernce factor averages
# to a constant.


Theta = np.arange(-1.001, 1.001+0.0011, 0.0011)
d = 0.002
Lamda = 0.0005
a = 0.008
N = 20
C = 0.5
D = (np.sin(np.pi*(d/Lamda)*np.sin(Theta))/(np.pi*(d/Lamda)*np.sin(Theta)))**2
I = (np.sin(np.pi*(a/Lamda)*np.sin(Theta)*N)/(N*np.sin(np.pi*(a/Lamda)*np.sin(Theta))))**2
P1 = D*I
P2 = D*C
fig = plt.figure(1)

plt.subplot(1, 2, 1)

plt.plot(Theta,P1)

plt.xlim(-1.5, 1.5)
plt.ylim(0, 1)

plt.xlabel('\theta')
plt.legend(['P1(\theta)'])
plt.subplot(1, 2, 2)

plt.plot(Theta,P2)

plt.xlim(-1.5, 1.5)
plt.ylim(0, 0.5)

plt.xlabel('\theta')
plt.legend(['P2(\theta)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% D16FAGRRANS
% One dimensional periodic and random arrangement for interference and
% diffraction
% Diffraction on an amplitude grating with width of openings d, center to center
% distance of strips a, wavelength ?, distance from grating to screen X and coordinate on
% screen Y. All distances and wavelength in mm, number of lines N .Normal incidence.
% All parameters are globally defined above the graph.
% D(?) is the diffraction factor
% I(?) is the interference factor, normalized to 1.
% P1(?) is the product of interference and diffraction factor.
% P2(?) is for the case that the lines are not periodic and the interfernce factor averages
% to a constant.

function D16FAGRRANS;

Theta = (-1.001:0.0011:1.001);

d = 0.002;
Lamda = 0.0005;
a = 0.008;
N = 20;
C = 0.5;

D = (sin(pi*(d/Lamda)*sin(Theta))./(pi*(d/Lamda)*sin(Theta))).^2;
I = (sin(pi*(a/Lamda)*sin(Theta)*N)./(N*sin(pi*(a/Lamda)*sin(Theta)))).^2;

P1 = D.*I;
P2 = D.*C;

figure(1);
subplot(1,2,1);
plot(Theta,P1);
axis([-1.5 1.5 0 1]);
xlabel('\theta');
legend('P1(\theta)');

subplot(1,2,2);
plot(Theta,P2);
axis([-1.5 1.5 0 0.5]);
xlabel('\theta');
legend('P2(\theta)');

`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'D17ARAYRA3DS',
    title: "D17ARAYRA3DS - D17ARAYRA3DS\r",
    description: "D17ARAYRA3DS\r",
    category: "Optics - Diffraction",
    chapter: '3',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64
from mpl_toolkits.mplot3d import Axes3D

# D17ARAYRA3DS

# 3D Graph of diffraction pattern of a periodic array of
# rectangular apertures.
# In comparison the diffraction pattern of rectangular
# apertures in random array.

# 1. Periodic array


Lamda = 4
p = 6
d = 2
d1 =2
a1 = 4
a = 4
N = 30
I = 0:N
J = 0:N
nx = length(I)
ny = length(J)
M = zeros(nx,ny)
for r=1:nx
        for c=1:ny
            Xi = -2 + 0.20001*r
            Yj = -3 + 0.20001*c
            F = ((np.sin(2*np.pi*d*Xi/(2*Lamda))/(2*np.pi*d*Xi/(2*Lamda)))**2)*((np.sin(2*np.pi*d1*Yj/(2*Lamda))/(2*np.pi*d1*Yj/(2*Lamda)))**2)*((np.sin(2*np.pi*a*Xi*p/(2*Lamda))/(p*np.sin(2*np.pi*a*Xi/(2*Lamda))))**2)*((np.sin(2*np.pi*a1*Yj*p/(2*Lamda))/(p*np.sin(2*np.pi*a1*Yj/(2*Lamda))))**2)
            M(r,c) = F
fig = plt.figure(1)

plt.subplot(2, 1, 1)

ax = plt.gca()
if not hasattr(ax, 'plot_surface'):
    fig = plt.figure()
    ax = fig.add_subplot(111, projection='3d')
    X, Y = np.meshgrid(np.arange(M.shape[1]), np.arange(M.shape[0]))
    ax.plot_surface(X, Y, M, cmap='viridis')
axis([0 N 0 N 0 1])
plt.legend(['M'])

# 2. Random array

MM = zeros(nx,ny)
for r=1:nx
        for c=1:ny
            Xi = -2 + 0.20001*r
            Yj = -3 + 0.20001*c
            F1 = ((np.sin(2*np.pi*d*Xi/(2*Lamda))/(2*np.pi*d*Xi/(2*Lamda)))**2)*((np.sin(2*np.pi*a*Yj/(2*Lamda))/(2*np.pi*a*Yj/(2*Lamda)))**2)
            MM(r,c) = F1
plt.subplot(2, 1, 2)

ax = plt.gca()
if not hasattr(ax, 'plot_surface'):
    fig = plt.figure()
    ax = fig.add_subplot(111, projection='3d')
    X, Y = np.meshgrid(np.arange(MM.shape[1]), np.arange(MM.shape[0]))
    ax.plot_surface(X, Y, MM, cmap='viridis')
axis([0 N 0 N 0 1])
plt.legend(['MM'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% D17ARAYRA3DS

% 3D Graph of diffraction pattern of a periodic array of
% rectangular apertures.
% In comparison the diffraction pattern of rectangular
% apertures in random array.

% 1. Periodic array

function D17ARAYRA3DS;

Lamda = 4;
p = 6;
d = 2;
d1 =2;
a1 = 4;
a = 4;
N = 30;

I = 0:N;
J = 0:N;

nx = length(I);
ny = length(J);
M = zeros(nx,ny);
for r=1:nx;
        for c=1:ny;
            Xi = -2 + 0.20001*r; 
            Yj = -3 + 0.20001*c;
            F = ((sin(2*pi*d*Xi/(2*Lamda))./(2*pi*d*Xi/(2*Lamda))).^2).*((sin(2*pi*d1*Yj/(2*Lamda))./(2*pi*d1*Yj/(2*Lamda))).^2).*((sin(2*pi*a*Xi*p/(2*Lamda))./(p*sin(2*pi*a*Xi/(2*Lamda)))).^2).*((sin(2*pi*a1*Yj*p/(2*Lamda))./(p*sin(2*pi*a1*Yj/(2*Lamda)))).^2);
            M(r,c) = F;
        end;
end;



figure(1);
subplot(2,1,1);
mesh(M);               
axis([0 N 0 N 0 1]);
legend('M');

% 2. Random array

MM = zeros(nx,ny);
for r=1:nx;
        for c=1:ny;
            Xi = -2 + 0.20001*r; 
            Yj = -3 + 0.20001*c;
            F1 = ((sin(2*pi*d*Xi/(2*Lamda))./(2*pi*d*Xi/(2*Lamda))).^2).*((sin(2*pi*a*Yj/(2*Lamda))./(2*pi*a*Yj/(2*Lamda))).^2);
            MM(r,c) = F1;
        end;
end;

subplot(2,1,2);

mesh(MM);               
axis([0 N 0 N 0 1]);
legend('MM');`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'D18FEFNCS',
    title: "D18FEFNCS - D18FEFNCS\r",
    description: "D18FEFNCS\r",
    category: "Optics - Diffraction",
    chapter: '3',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64


# D18FEFNCS
# Fresnel's Integrals C(Y) and S(Y).


Y = np.arange(0, 5+0.01, 0.01)
[t,cy]=ode45(@D18COS,Y,[0])
[t,sy]=ode45(@D18SIN,Y,[0])
fig = plt.figure(1)

plt.subplot(3, 2, 1)

plt.plot(t,cy)

plt.xlim(0, 6)
plt.ylim(0, 1)

plt.xlabel('Y')
plt.legend(['C(Y)'])
plt.subplot(3, 2, 2)

plt.plot(t,sy)

plt.xlim(0, 6)
plt.ylim(0, 1)

plt.xlabel('Y')
plt.legend(['S(Y)'])
plt.subplot(2, 1, 2)

plt.plot(t,cy,t,sy)

plt.xlim(0, 5)
plt.ylim(0, 0.8)

plt.xlabel('Y')
plt.legend(['C(Y)', 'S(Y)'])
Out=[np.cos((np.pi/2)*(T**2))]
Out=[np.sin((np.pi/2)*(T**2))]
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `
% D18FEFNCS
% Fresnel's Integrals C(Y) and S(Y).

function D18FEFNCS;


Y = (0:0.01:5);
[t,cy]=ode45(@D18COS,Y,[0]);
[t,sy]=ode45(@D18SIN,Y,[0]);



figure(1);
subplot(3,2,1);
plot(t,cy);
axis([0 6 0 1]);                
xlabel('Y');
legend('C(Y)');

subplot(3,2,2);
plot(t,sy);
axis([0 6 0 1]);                
xlabel('Y');
legend('S(Y)');


subplot(2,1,2);
plot(t,cy,t,sy);
axis([0 5 0 0.8]);                
xlabel('Y');
legend('C(Y)','S(Y)');

function Out=D18COS(T,X)
Out=[cos((pi/2)*(T^2))];

function Out=D18SIN(T,X)
Out=[sin((pi/2)*(T^2))];

`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'D19FESLITS',
    title: "D19FESLITS - D19FESLITS\r",
    description: "D19FESLITS\r",
    category: "Optics - Diffraction",
    chapter: '3',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# D19FESLITS
# Fresnel's Integrals for the calculation of the diffraction on a slit.
# All units in mm, globally definition of parameters.

Lamda =  5e-4
X = 4000
d = 1.5
Y = np.arange(0, 10+0.1, 0.1)
nY = length(Y)
for k=1:nY
   I(k) = (Cp(Y(k))-Cq(Y(k)))**2 + (Sp(Y(k))-Sq(Y(k)))**2 
fig = plt.figure(1)

plt.plot(Y,I)

plt.xlim(0, 7.5)
plt.ylim(0, 2.5)

plt.xlabel('Y')
plt.legend(['I(Y)'])
Out = (Y + d/2)*(np.sqrt(2/(Lamda*X)))
Out = (Y - d/2)*(np.sqrt(2/(Lamda*X)))
Out = quad(@sinf,0,p(Y))
Out = quad(@sinf,0,q(Y))
Out = quad(@cosf,0,q(Y))
Out = quad(@cosf,0,p(Y))
Out = np.sin((np.pi/2)*(mu**2))
Out = np.cos((np.pi/2)*(mu**2))
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% D19FESLITS
% Fresnel's Integrals for the calculation of the diffraction on a slit.
% All units in mm, globally definition of parameters.
function D19FESLITS;
global Lamda X d;
Lamda =  5e-4;
X = 4000;
d = 1.5;

Y = (0:0.1:10);
nY = length(Y);
for k=1:nY;
   I(k) = (Cp(Y(k))-Cq(Y(k)))^2 + (Sp(Y(k))-Sq(Y(k)))^2 ;    
end;


figure(1);
plot(Y,I);
axis([0 7.5 0 2.5]);
xlabel('Y');
legend('I(Y)');






function Out=q(Y)
global Lamda X d;
Out = (Y + d/2).*(sqrt(2/(Lamda*X)));

function Out=p(Y)
global Lamda X d;
Out = (Y - d/2).*(sqrt(2/(Lamda*X)));


function Out=Sp(Y);
Out = quad(@sinf,0,p(Y));
function Out=Sq(Y);
Out = quad(@sinf,0,q(Y));
function Out=Cq(Y);
Out = quad(@cosf,0,q(Y));
function Out=Cp(Y);
Out = quad(@cosf,0,p(Y));

function Out=sinf(mu)
Out = sin((pi/2)*(mu.^2));
function Out=cosf(mu)
Out = cos((pi/2)*(mu.^2));`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'D1CIRS',
    title: "D1CIRS - D1CIRS\r",
    description: "D1CIRS\r",
    category: "Optics - Diffraction",
    chapter: '3',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# D1CIRS

# Circular Opening, normalized intensity.
# When making the opening larger and larger,
# at the center is a change from minima to maxima
# to minima and so on.


po = 4000
Lamda = 0.0005
a=np.arange(0.1, 5+0.01, 0.01)
k =2*np.pi/Lamda
I=(Lamda**2)*power((np.sin((k*(power(a,2)))/(2*po))),2)
fig = plt.figure(1)

plt.plot(a,I)

plt.xlim(0, 5)
plt.ylim(0, 3*10**(-7))
;                  # PLOTS LIMITS                    
plt.xlabel('a')
plt.legend(['I(a)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% D1CIRS

% Circular Opening, normalized intensity.
% When making the opening larger and larger,
% at the center is a change from minima to maxima
% to minima and so on.

function D1CIRS;
po = 4000;
Lamda = 0.0005;

a=(0.1:0.01:5);
k =2*pi/Lamda;


I=(Lamda^2)*power((sin((k*(power(a,2)))/(2*po))),2);

figure(1);
plot(a,I);
axis([0 5 0 3*10^(-7)]);                  % PLOTS LIMITS                    
xlabel('a');
legend('I(a)');

`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'D20FEEDGES',
    title: "D20FEEDGES - D20FEEDGES\r",
    description: "D20FEEDGES\r",
    category: "Optics - Diffraction",
    chapter: '3',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# D20FEEDGES
# Fresnel's Integrals for the calculation of the diffractionon an edge.
# All units in mm, global definition of the parameters.

X = 4000
Lamda = 5*10**(-4)
Y = np.arange(-4, 15+0.05, 0.05)
# We treat the diffraction at an edge like diffraction on a large slit.
# One side is set at d = 0, the other at d = -inif. This translates into

# For p(Y) = - infinite  
# we have Cp(Y) = Sp(Y) = -0.5
# np.sqrt(2/(Lamda*X))=1

qY = Y*1
# We take q(Y) equal Y for scaling,

qY = Y
qY1 = np.arange(0, -4+-0.05, -0.05)
qY2 = np.arange(0.05, 15+0.05, 0.05)
[t,Cq1] = ode45(@C,qY1,[0])
[t,Cq2] = ode45(@C,qY2,[0])
Cq = [flipud(Cq1);Cq2]
[t,Sq1] = ode45(@S,qY1,[0])
[t,Sq2] = ode45(@S,qY2,[0])
Sq = [flipud(Sq1);Sq2]
IY = ((Cq-(-0.5))**2)+((Sq-(-0.5))**2)
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(Y,IY)

plt.xlim(-5, 15)
plt.ylim(0, 3)

plt.xlabel('Y')
plt.legend(['IY(Y)'])
pY = Y-10
pY1 = np.arange(0, -14+-0.05, -0.05)
pY2 = np.arange(0.05, 5+0.05, 0.05)
[t,Cp1] = ode45(@C,pY1,[0])
[t,Cp2] = ode45(@C,pY2,[0])
Cp = [flipud(Cp1);Cp2]
[t,Sp1] = ode45(@S,pY1,[0])
[t,Sp2] = ode45(@S,pY2,[0])
Sp = [flipud(Sp1);Sp2]
IIY = ((Cq-Cp)**2)+((Sq-Sp)**2)
plt.subplot(2, 1, 2)

plt.plot(Y,IIY)

plt.xlim(-4, 16)
plt.ylim(0, 4)

plt.xlabel('Y')
plt.legend(['IIY(Y)'])
Out = np.sin((np.pi/2)*T**2)
Out = np.cos((np.pi/2)*T**2)
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% D20FEEDGES
% Fresnel's Integrals for the calculation of the diffractionon an edge.
% All units in mm, global definition of the parameters.
function D20FEEDGES;
X = 4000;
Lamda = 5*10^(-4);

Y = (-4:0.05:15);


% We treat the diffraction at an edge like diffraction on a large slit.
% One side is set at d = 0, the other at d = -inif. This translates into

% For p(Y) = - infinite  
%                         we have Cp(Y) = Sp(Y) = -0.5
% sqrt(2/(Lamda*X))=1

qY = Y*1;

% We take q(Y) equal Y for scaling,

qY = Y;
qY1 = (0:-0.05:-4);
qY2 = (0.05:0.05:15);

[t,Cq1] = ode45(@C,qY1,[0]);
[t,Cq2] = ode45(@C,qY2,[0]);
Cq = [flipud(Cq1);Cq2];
[t,Sq1] = ode45(@S,qY1,[0]);
[t,Sq2] = ode45(@S,qY2,[0]);
Sq = [flipud(Sq1);Sq2];

IY = ((Cq-(-0.5)).^2)+((Sq-(-0.5)).^2);

figure(1);
subplot(2,1,1);
plot(Y,IY);
axis([-5 15 0 3]);                
xlabel('Y');
legend('IY(Y)');


pY = Y-10;
pY1 = (0:-0.05:-14);
pY2 = (0.05:0.05:5);

[t,Cp1] = ode45(@C,pY1,[0]);
[t,Cp2] = ode45(@C,pY2,[0]);
Cp = [flipud(Cp1);Cp2];

[t,Sp1] = ode45(@S,pY1,[0]);
[t,Sp2] = ode45(@S,pY2,[0]);
Sp = [flipud(Sp1);Sp2];

IIY = ((Cq-Cp).^2)+((Sq-Sp).^2);

subplot(2,1,2);
plot(Y,IIY);
axis([-4 16 0 4]);                
xlabel('Y');
legend('IIY(Y)');


function Out=S(T,X)
Out = sin((pi/2)*T^2);
function Out=C(T,X)
Out = cos((pi/2)*T^2);



`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'D2FASLITS',
    title: "D2FASLITS - D2FASLITS\r",
    description: "D2FASLITS\r",
    category: "Optics - Diffraction",
    chapter: '3',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# D2FASLITS
# Diffraction on a slit of width d at wavelength ????.
# X is distance: Slit-Screen,
# Y is coordinate on Screen.
# For small angles, Y/X is proportional to the diffraction angle ?.
# All length in mm.
# MCAD notice the singularity at 0. for the graph we get around it using
# the range Y = -100.1, -99.1 to 100.1
# Three slits with different width d1, d2, and d3


d1 = 0.08
d2 = 0.12
d3 = 0.16
X = 4000; # nu
Lamda = 0.0005
Theta = np.arange(-2, 2+0.01, 0.01)
I1 = (np.sin(np.pi*(d1/Lamda)*np.sin((2*np.pi/360)*Theta))/(np.pi*(d1/Lamda)*(2*np.pi/360)*Theta) )**2
I2 = (np.sin(np.pi*(d2/Lamda)*np.sin((2*np.pi/360)*Theta))/(np.pi*(d2/Lamda)*(2*np.pi/360)*Theta) )**2
I3 = (np.sin(np.pi*(d3/Lamda)*np.sin((2*np.pi/360)*Theta))/(np.pi*(d3/Lamda)*(2*np.pi/360)*Theta) )**2
fig = plt.figure(1)

plt.plot(Theta,I1,Theta,I2,Theta,I3)

plt.xlim(-1, 1)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('\theta')
plt.legend(['I1(\theta)', 'I2(\theta)', 'I3(\theta)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% D2FASLITS
% Diffraction on a slit of width d at wavelength ????.
% X is distance: Slit-Screen,
% Y is coordinate on Screen.
% For small angles, Y/X is proportional to the diffraction angle ?.
% All length in mm.
% MCAD notice the singularity at 0. for the graph we get around it using
% the range Y = -100.1, -99.1 to 100.1
% Three slits with different width d1, d2, and d3

function D2FASLITS;
d1 = 0.08;
d2 = 0.12;
d3 = 0.16;
X = 4000; %nu
Lamda = 0.0005;
Theta = (-2:0.01:2);
I1 = (sin(pi*(d1/Lamda)*sin((2*pi/360)*Theta))./(pi*(d1/Lamda)*(2*pi/360)*Theta) ).^2;
I2 = (sin(pi*(d2/Lamda)*sin((2*pi/360)*Theta))./(pi*(d2/Lamda)*(2*pi/360)*Theta) ).^2;
I3 = (sin(pi*(d3/Lamda)*sin((2*pi/360)*Theta))./(pi*(d3/Lamda)*(2*pi/360)*Theta) ).^2;

figure(1);
plot(Theta,I1,Theta,I2,Theta,I3);
axis([-1 1 0 1]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('I1(\theta)','I2(\theta)','I3(\theta)');
`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'D3FASLITEXS',
    title: "D3FASLITEXS - D3FASLITEXS\r",
    description: "D3FASLITEXS\r",
    category: "Optics - Diffraction",
    chapter: '3',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# D3FASLITEXS
# Study of side maxima and minima of the Slit
# Diffraction on a slit of width d and wavelength ?.
# X is distace: Slit-Screen,
# Y is coordinate on Screen.
# For small angles, Y/X is proportional to the diffraction angle.
# All length in mm.


Lamda = 0.0005
X = 4000
Y = np.arange(18, 150+1, 1)
d = 0.08
I1 = (np.sin(np.pi*(d/Lamda)*(Y/X))/(np.pi*(d/Lamda)*(Y/X)))**2
fig = plt.figure(1)

plt.plot(Y,real(I1)
,Y,imag(I1))
plt.xlim(0, 150)
plt.ylim(0, 0.12)
;                  # PLOTS LIMITS                    
plt.xlabel('Y')
plt.legend(['I1(Y)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% D3FASLITEXS
% Study of side maxima and minima of the Slit
% Diffraction on a slit of width d and wavelength ?.
% X is distace: Slit-Screen,
% Y is coordinate on Screen.
% For small angles, Y/X is proportional to the diffraction angle.
% All length in mm.

function D3FASLITEXS;

Lamda = 0.0005;
X = 4000;
Y = (18:1:150);
d = 0.08;
I1 = (sin(pi*(d/Lamda)*(Y/X))./(pi*(d/Lamda)*(Y/X))).^2;


figure(1);
plot(Y,real(I1),Y,imag(I1));
axis([0 150 0 0.12]);                  % PLOTS LIMITS                    
xlabel('Y');
legend('I1(Y)');
`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'of',
    title: "of - D4FASLITFTS\r",
    description: "D4FASLITFTS\r",
    category: "Optics - Diffraction",
    chapter: '3',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64


# D4FASLITFTS
# Fourier transformation of step function of width 0 to d.
# The FT of the FT is also shown

I=np.arange(0, 255+1, 1)
d=20
X= (logical(I)>0) - (logical(I-d)>0)
fig = plt.figure(1)

plt.plot(I,real(X)
,I,imag(X))
plt.xlim(0, 300)
plt.ylim(-0.5, 1.5)
;                  # PLOTS LIMITS                    
plt.xlabel('i')
plt.legend(['I1(Y)'])
C= fft(X)
N = length(C)
J= (0:1:N-1)
fig = plt.figure(2)

plt.xlim(0, 0.6)
plt.ylim(0, 1)

plt.plot(J/255,real(C)
/np.sqrt(N),J/255,-imag(C)/np.sqrt(N))
                # PLOTS LIMITS        
plt.xlim(0, 0.6)
plt.ylim(-1, 2)

plt.xlabel('j/255')
plt.legend(['real(C)/sqrt(N)', '-imag(C)/sqrt(N)'])
Z = ifft(C)
fig = plt.figure(3)

plt.xlim(0, 0.6)
plt.ylim(0, 1)

plt.plot(I,real(Z)
,I,imag(Z))
plt.legend(['real(Z(I))', 'imag(Z(I))'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `
% D4FASLITFTS
% Fourier transformation of step function of width 0 to d.
% The FT of the FT is also shown
function D4FASLITFTS;


I=(0:1:255);
d=20;

X= (logical(I)>0) - (logical(I-d)>0);

figure(1);
plot(I,real(X),I,imag(X));
axis([0 300 -0.5 1.5]);                  % PLOTS LIMITS                    
xlabel('i');
legend('I1(Y)');





C= fft(X);
N = length(C);
J= (0:1:N-1);
figure(2);
axis([0 0.6 0 1]);  

plot(J/255,real(C)/sqrt(N),J/255,-imag(C)/sqrt(N));
                % PLOTS LIMITS        
axis([0 0.6 -1 2]);
xlabel('j/255');
legend('real(C)/sqrt(N)','-imag(C)/sqrt(N)');



Z = ifft(C);
figure(3);
axis([0 0.6 0 1]);  
plot(I,real(Z),I,imag(Z));
legend('real(Z(I))','imag(Z(I))');`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'D5FARECTS',
    title: "D5FARECTS - D5FARECTS The diffraction pattern of a rectangular aperture.\r",
    description: "D5FARECTS The diffraction pattern of a rectangular aperture.\r",
    category: "Optics - Diffraction",
    chapter: '3',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64
from mpl_toolkits.mplot3d import Axes3D

# D5FARECTS The diffraction pattern of a rectangular aperture.
# The width in the x-direction is d, in y-direction a.
# One may look at the plot from different angles, change colors
# and make a "Contour Plot".


N = 40
D = 4
A = 2
Lamda = 4
I = 0:N
J = 0:N
nx = length(I)
ny = length(J)
Z = zeros(nx,ny)
for r=1:nx
        for c=1:ny
            Xi = -4 + 0.20001*r
            Yi = -4 + 0.20001*c
            Z(r,c)= power(np.sin(2*np.pi*D*(Xi/(2*Lamda)))/(2*np.pi*D*(Xi/(2*Lamda))),2)*power(np.sin(2*np.pi*A*(Yi/(2*Lamda)))/(2*np.pi*A*(Yi/(2*Lamda))),2)
F= Z
fig = plt.figure(1)

ax = plt.gca()
if not hasattr(ax, 'plot_surface'):
    fig = plt.figure()
    ax = fig.add_subplot(111, projection='3d')
    X, Y = np.meshgrid(np.arange(F.shape[1]), np.arange(F.shape[0]))
    ax.plot_surface(X, Y, F, cmap='viridis')
# PLOTS LIMITS                    
axis([0 40 0 40 0 1])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% D5FARECTS The diffraction pattern of a rectangular aperture.
% The width in the x-direction is d, in y-direction a.
% One may look at the plot from different angles, change colors
% and make a "Contour Plot".

function D5FARECTS;

N = 40;
D = 4;
A = 2;
Lamda = 4;


I = 0:N;
J = 0:N;

nx = length(I);
ny = length(J);
Z = zeros(nx,ny);
for r=1:nx;
        for c=1:ny;
            Xi = -4 + 0.20001*r; 
            Yi = -4 + 0.20001*c;
            Z(r,c)= power(sin(2*pi*D*(Xi/(2*Lamda)))/(2*pi*D*(Xi/(2*Lamda))),2)*power(sin(2*pi*A*(Yi/(2*Lamda)))/(2*pi*A*(Yi/(2*Lamda))),2);
        end;
end;




F= Z;

figure(1);

mesh(F);



                 % PLOTS LIMITS                    
axis([0 40 0 40 0 1]);


`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'D6FARONS',
    title: "D6FARONS - D6FARONS\r",
    description: "D6FARONS\r",
    category: "Optics - Diffraction",
    chapter: '3',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# D6FARONS
# Diffraction on a round aperture of radius a, using wavelength ?.
# The graph is not normalized.
# X is distace:Slit-Screen,
# R is coordinate on Screen,
# All length in mm, parameters are globally defined above the graph.
# Three round apertures with different Radii a1, a2, and a3


R = np.arange(-10.01, 10.01+0.1, 0.1)
X = 1000
Lamda = 0.010
a1 = 1.5
a2 = 3
a3 = 6
I1 = (besselj(1,(2*np.pi*a1*R/(Lamda*X)))/(2*np.pi*a1*R/(Lamda*X)))**2
I2 = (besselj(1,(2*np.pi*a2*R/(Lamda*X)))/(2*np.pi*a2*R/(Lamda*X)))**2
I3 = (besselj(1,(2*np.pi*a3*R/(Lamda*X)))/(2*np.pi*a3*R/(Lamda*X)))**2
fig = plt.figure(1)

plt.plot(R,I1,R,I2,R,I3)

plt.xlim(-15, 10)
plt.ylim(0, 0.3)
;                  # PLOTS LIMITS                    
plt.xlabel('R')
plt.legend(['I1(R)', 'I2(R)', 'I3(R)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% D6FARONS
% Diffraction on a round aperture of radius a, using wavelength ?.
% The graph is not normalized.
% X is distace:Slit-Screen,
% R is coordinate on Screen,
% All length in mm, parameters are globally defined above the graph.
% Three round apertures with different Radii a1, a2, and a3

function D6FARONS;

R = (-10.01:0.1:10.01);
X = 1000;
Lamda = 0.010;
a1 = 1.5;
a2 = 3;
a3 = 6;

I1 = (besselj(1,(2*pi*a1*R/(Lamda*X)))./(2*pi*a1*R/(Lamda*X))).^2;
I2 = (besselj(1,(2*pi*a2*R/(Lamda*X)))./(2*pi*a2*R/(Lamda*X))).^2;
I3 = (besselj(1,(2*pi*a3*R/(Lamda*X)))./(2*pi*a3*R/(Lamda*X))).^2;

figure(1);
plot(R,I1,R,I2,R,I3);
axis([-15 10 0 0.3]);                  % PLOTS LIMITS                    
xlabel('R');
legend('I1(R)','I2(R)','I3(R)');
`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'D7FARON3DS',
    title: "D7FARON3DS - D7FARON3DS\r",
    description: "D7FARON3DS\r",
    category: "Optics - Diffraction",
    chapter: '3',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64
from mpl_toolkits.mplot3d import Axes3D

# D7FARON3DS
# One may look at the plot from different angles, change colors, and make a "Contour Plot".
# Radius of aperture is a
# The coordinate on the observation screen is R
# Wavelength ?, distance from aperture to screen is X.
# 3D diffraction pattern of a round aperture as a circular
# symmetric plot using two coordinates.


N = 30
D = 2
A = 0.1
Lamda = 0.0005
X = 4000
I = 0:N
J = 0:N
nx = length(I)
ny = length(J)
G = zeros(nx,ny)
for r=1:nx
        for c=1:ny
            Xi = -20 + 1.5001*r
            Yi = -20 + 1.5001*c
            R = np.sqrt(Xi**2+Yi**2)
            G(r,c)= (( besselj(1,(2*np.pi*A*R/(X*Lamda)))/(2*np.pi*A*R/(X*Lamda))))**2
fig = plt.figure(1)

ax = plt.gca()
if not hasattr(ax, 'plot_surface'):
    fig = plt.figure()
    ax = fig.add_subplot(111, projection='3d')
    X, Y = np.meshgrid(np.arange(real(G.shape[1]), np.arange(real(G.shape[0]))
    ax.plot_surface(X, Y, real(G, cmap='viridis')
)
                 # PLOTS LIMITS                    
axis([0 N 0 N 0 0.3])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% D7FARON3DS
% One may look at the plot from different angles, change colors, and make a "Contour Plot".
% Radius of aperture is a
% The coordinate on the observation screen is R
% Wavelength ?, distance from aperture to screen is X.
% 3D diffraction pattern of a round aperture as a circular
% symmetric plot using two coordinates.

function D7FARON3DS;

N = 30;
D = 2;
A = 0.1;
Lamda = 0.0005;
X = 4000;

I = 0:N;
J = 0:N;

nx = length(I);
ny = length(J);
G = zeros(nx,ny);
for r=1:nx;
        for c=1:ny;
            Xi = -20 + 1.5001*r;
            Yi = -20 + 1.5001*c; 
            R = sqrt(Xi^2+Yi^2);
            G(r,c)= (( besselj(1,(2*pi*A*R/(X*Lamda)))/(2*pi*A*R/(X*Lamda))))^2;
        end;
end;






figure(1);

mesh(real(G));
                 % PLOTS LIMITS                    
axis([0 N 0 N 0 0.3])`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'D8FARONEXS',
    title: "D8FARONEXS - D8FARONEXS\r",
    description: "D8FARONEXS\r",
    category: "Optics - Diffraction",
    chapter: '3',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# D8FARONEXS
# Graph of part of the diffraction pattern of a round aperture of radius a and
# wavelength ????.
# The graph is not normalized.
# X is distace:Slit-Screen,
# R is coordinate on Screen,
# All length in mm, parameters are globally defined above the graph.


R = np.arange(3, 10+0.1, 0.1)
X = 1000
Lamda = 0.010
a = 1.5
I = (besselj(1,(2*np.pi*a*R/(Lamda*X)))/(2*np.pi*a*R/(Lamda*X)))**2
fig = plt.figure(1)

plt.plot(R,I)

plt.xlim(3, 10)
plt.ylim(0, 0.02)
;                  # PLOTS LIMITS                    
plt.xlabel('R')
plt.legend(['I(R)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% D8FARONEXS
% Graph of part of the diffraction pattern of a round aperture of radius a and
% wavelength ????.
% The graph is not normalized.
% X is distace:Slit-Screen,
% R is coordinate on Screen,
% All length in mm, parameters are globally defined above the graph.

function D8FARONEXS;
R = (3:0.1:10);
X = 1000;
Lamda = 0.010;
a = 1.5;

I = (besselj(1,(2*pi*a*R/(Lamda*X)))./(2*pi*a*R/(Lamda*X))).^2;

figure(1);
plot(R,I);
axis([3 10 0 0.02]);                  % PLOTS LIMITS                    
xlabel('R');
legend('I(R)');

`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'D9FAGRAMPS',
    title: "D9FAGRAMPS - D9FAGRAMPS\r",
    description: "D9FAGRAMPS\r",
    category: "Optics - Diffraction",
    chapter: '3',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# D9FAGRAMPS
# Diffraction on an amplitude grating at normal incidence.
# Width of openings d, center to center distance of strips a, wavelength ????, distance
# from grating to screen X and coordinate on Screen Y.
# All distances and wavelength in mm, number of lines N.
# All parameters are globally defined above the graph.
# D(A) is the diffraction factor
# I(A) is the interference factor, normalized to 1. The numerator is plotted separately to
# show where the main maxima are located (0/0).
# P(A) is the product of Interference and diffraction factor.


Theta = np.arange(-0.5001, 0.5+0.0002, 0.0002)
d= 0.001
Lamda = 0.0005
a = 0.002
N = 6
D = (np.sin(np.pi*(d/Lamda)*np.sin(Theta))/(np.pi*(d/Lamda)*np.sin(Theta)))**2
I = (np.sin(np.pi*(a/Lamda)*np.sin(Theta)*N)/(N*np.sin(np.pi*(a/Lamda)*np.sin(Theta))))**2
Y = (np.sin(np.pi*(a/Lamda)*np.sin(Theta)*N))**2
P = D*I
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(Theta,I,Theta,Y)

plt.xlim(-0.6, 0.6)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('\theta')
plt.legend(['I(\theta)', 'Y(\theta)'])
plt.subplot(2, 1, 2)

plt.plot(Theta,I,Theta,D,Theta,P)

plt.xlim(-0.6, 0.6)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('\theta')
plt.legend(['I(\theta)', 'D(\theta)', 'P(\theta)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% D9FAGRAMPS
% Diffraction on an amplitude grating at normal incidence.
% Width of openings d, center to center distance of strips a, wavelength ????, distance
% from grating to screen X and coordinate on Screen Y.
% All distances and wavelength in mm, number of lines N.
% All parameters are globally defined above the graph.
% D(A) is the diffraction factor
% I(A) is the interference factor, normalized to 1. The numerator is plotted separately to
% show where the main maxima are located (0/0).
% P(A) is the product of Interference and diffraction factor.

function D9FAGRAMPS;

Theta = (-0.5001:0.0002:0.5);
d= 0.001;
Lamda = 0.0005;
a = 0.002;
N = 6;

D = (sin(pi*(d/Lamda)*sin(Theta))./(pi*(d/Lamda)*sin(Theta))).^2;
I = (sin(pi*(a/Lamda)*sin(Theta)*N)./(N*sin(pi*(a/Lamda)*sin(Theta)))).^2;
Y = (sin(pi*(a/Lamda).*sin(Theta)*N)).^2;
P = D.*I;


figure(1);
subplot(2,1,1);
plot(Theta,I,Theta,Y);
axis([-0.6 0.6 0 1]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('I(\theta)','Y(\theta)');


subplot(2,1,2);
plot(Theta,I,Theta,D,Theta,P);
axis([-0.6 0.6 0 1]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('I(\theta)','D(\theta)','P(\theta)');
`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'DA1FAGRSTEP1S',
    title: "DA1FAGRSTEP1S - DA1FAGRSTEP1S\r",
    description: "DA1FAGRSTEP1S\r",
    category: "Optics - Diffraction",
    chapter: '3',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# DA1FAGRSTEP1S
# Diffraction on an step grating with width d, center to center distance of steps a,
# height H, wavelength ????, distance from grating to screen X and coordinate on
# Screen Y. All distances and wavelength in mm, number of lines N .Normal incidence.
# All parameters are globally defined above the graph.
# D(?) is the diffraction factor, I(?) is the interference factor, normalized to 1.
# II(?) is the interfernce factor of the gratings with respect to the two planes.
# P(A) is the product of interference and diffraction factors.
# The intensity of the zeroth order and of the first orders change depending on the heigth H.
# If H is a multiple of ?, all light is in the zero order, if H is a multiple of ?/2, all light is in:
# the first order.


Theta =np.arange(-0.5001, 0.5+0.0002, 0.0002)
Lamda = 0.0005
a = 0.002
N = 6
d = 0.001
n1 = 10.25
n2 = 10
n3 = 10.37
n4 = 10.5
H1 = n1*Lamda
H2 = n2*Lamda
H3 = n3*Lamda
H4 = n4*Lamda
D = (np.sin(np.pi*(d/Lamda)*np.sin(Theta))/(np.pi*(d/Lamda)*np.sin(Theta)))**2
I = (np.sin(np.pi*(a/Lamda)*np.sin(Theta)*N)/(N*np.sin(np.pi*(a/Lamda)*np.sin(Theta))))**2
II1 =  (np.cos((np.pi/Lamda)*(d*np.sin(Theta)+H1)))**2
II2 =  (np.cos((np.pi/Lamda)*(d*np.sin(Theta)+H2)))**2
II3 =  (np.cos((np.pi/Lamda)*(d*np.sin(Theta)+H3)))**2
II4 =  (np.cos((np.pi/Lamda)*(d*np.sin(Theta)+H4)))**2
P1 = D*I*II1
P2 = D*I*II2
P3 = D*I*II3
P4 = D*I*II4
fig = plt.figure(1)

plt.plot(Theta,P1,Theta,P2,Theta,P3,Theta,P4,Theta,D)

plt.xlim(-1, 1)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('\theta')
plt.legend(['P1(\theta)', 'P2(\theta)', 'P3(\theta)', 'P4(\theta)', 'D(\theta)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% DA1FAGRSTEP1S
% Diffraction on an step grating with width d, center to center distance of steps a,
% height H, wavelength ????, distance from grating to screen X and coordinate on
% Screen Y. All distances and wavelength in mm, number of lines N .Normal incidence.
% All parameters are globally defined above the graph.
% D(?) is the diffraction factor, I(?) is the interference factor, normalized to 1.
% II(?) is the interfernce factor of the gratings with respect to the two planes.
% P(A) is the product of interference and diffraction factors.
% The intensity of the zeroth order and of the first orders change depending on the heigth H.
% If H is a multiple of ?, all light is in the zero order, if H is a multiple of ?/2, all light is in
% the first order.

function DA1FAGRSTEP1S;

Theta =(-0.5001:0.0002:0.5);
Lamda = 0.0005;

a = 0.002;
N = 6;
d = 0.001;
n1 = 10.25;
n2 = 10;
n3 = 10.37;
n4 = 10.5;
H1 = n1*Lamda;
H2 = n2*Lamda;
H3 = n3*Lamda;
H4 = n4*Lamda;


D = (sin(pi*(d/Lamda)*sin(Theta))./(pi*(d/Lamda)*sin(Theta))).^2;
I = (sin(pi*(a/Lamda)*sin(Theta)*N)./(N*sin(pi*(a/Lamda)*sin(Theta)))).^2;
II1 =  (cos((pi/Lamda)*(d*sin(Theta)+H1))).^2;
II2 =  (cos((pi/Lamda)*(d*sin(Theta)+H2))).^2;
II3 =  (cos((pi/Lamda)*(d*sin(Theta)+H3))).^2;
II4 =  (cos((pi/Lamda)*(d*sin(Theta)+H4))).^2;

P1 = D.*I.*II1;
P2 = D.*I.*II2;
P3 = D.*I.*II3;
P4 = D.*I.*II4;

figure(1);
plot(Theta,P1,Theta,P2,Theta,P3,Theta,P4,Theta,D);
axis([-1 1 0 1]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('P1(\theta)','P2(\theta)','P3(\theta)','P4(\theta)','D(\theta)');
`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'DA2FAGRSTEP2S',
    title: "DA2FAGRSTEP2S - DA2FAGRSTEP2S\r",
    description: "DA2FAGRSTEP2S\r",
    category: "Optics - Diffraction",
    chapter: '3',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# DA2FAGRSTEP2S
# Diffraction on an step grating with width d, center to center distance of steps a,
# height H, two wavelength ?1 and ????2 for 0th and first order, distance from grating to
# screen X and coordinate on screen Y.
# All distances and wavelength in mm, number of lines N .Normal incidence.
# All parameters are globally defined above the graph.
# D(?) is the diffraction factor, I(?) is the interference factor, normalized to 1.
# II(?) is the interference factor of the gratings with respect to the two planes.
# P(A) is the product of Interference and diffraction factors.
# The intensity of the zeroth order and of the first orders change depending on the heigth H.
# If H is a multiple of ?, all light is in the zero order, if H is a multiple of ?/2, all light is in:
# the first order.


Theta = np.arange(-0.7001, 0.7+0.0002, 0.0002)
d = 0.001
a = 0.002
N = 6
Lamda1 = 0.0007
Lamda2 = 0.0005
n1 = 1
n2 = 0.5
H = 0.00035
H1 = n1*Lamda1
H2 = n1*Lamda2
H3 = n2*Lamda1
H4 = n2*Lamda2
D1 = (np.sin(np.pi*(d/Lamda1)*np.sin(Theta))/(np.pi*(d/Lamda1)*np.sin(Theta)))**2
D2 = (np.sin(np.pi*(d/Lamda2)*np.sin(Theta))/(np.pi*(d/Lamda2)*np.sin(Theta)))**2
D3 = D1
D4 = D2
I1 = (np.sin(np.pi*(a/Lamda1)*np.sin(Theta)*N)/(N*np.sin(np.pi*(a/Lamda1)*np.sin(Theta))))**2
I2 = (np.sin(np.pi*(a/Lamda2)*np.sin(Theta)*N)/(N*np.sin(np.pi*(a/Lamda2)*np.sin(Theta))))**2
I3 = I1
I4 = I2
II1 = (np.cos((np.pi/Lamda1)*(d*np.sin(Theta)+H1)))**2
II2 = (np.cos((np.pi/Lamda2)*(d*np.sin(Theta)+H2)))**2
II3 = (np.cos((np.pi/Lamda1)*(d*np.sin(Theta)+H3)))**2
II4 = (np.cos((np.pi/Lamda2)*(d*np.sin(Theta)+H4)))**2
P1 = D1*I1*II1
P2 = D2*I2*II2
P3 = D1*I1*II3
P4 = D2*I2*II4
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(Theta,P1,Theta,P2,Theta,D1,Theta,D2)

plt.xlim(-0.8, 0.8)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
xlabel('\theta','Fontsize',12)
plt.legend(['P1(\theta)', 'P2(\theta)', 'D1(\theta)', 'D2(\theta)'])
plt.subplot(2, 1, 2)

plt.plot(Theta,P3,Theta,P4,Theta,D3,Theta,D4)

plt.xlim(-0.8, 0.8)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
xlabel('\theta','Fontsize',12)
plt.legend(['P3(\theta)', 'P4(\theta)', 'D3(\theta)', 'D4(\theta)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% DA2FAGRSTEP2S
% Diffraction on an step grating with width d, center to center distance of steps a,
% height H, two wavelength ?1 and ????2 for 0th and first order, distance from grating to
% screen X and coordinate on screen Y.
% All distances and wavelength in mm, number of lines N .Normal incidence.
% All parameters are globally defined above the graph.
% D(?) is the diffraction factor, I(?) is the interference factor, normalized to 1.
% II(?) is the interference factor of the gratings with respect to the two planes.
% P(A) is the product of Interference and diffraction factors.
% The intensity of the zeroth order and of the first orders change depending on the heigth H.
% If H is a multiple of ?, all light is in the zero order, if H is a multiple of ?/2, all light is in
% the first order.

function DA2FAGRSTEP2S;

Theta = (-0.7001:0.0002:0.7);
d = 0.001;
a = 0.002;
N = 6;
Lamda1 = 0.0007;
Lamda2 = 0.0005;
n1 = 1;
n2 = 0.5;
H = 0.00035;
H1 = n1*Lamda1;
H2 = n1*Lamda2;
H3 = n2*Lamda1;
H4 = n2*Lamda2;


D1 = (sin(pi*(d/Lamda1)*sin(Theta))./(pi*(d/Lamda1)*sin(Theta))).^2;
D2 = (sin(pi*(d/Lamda2)*sin(Theta))./(pi*(d/Lamda2)*sin(Theta))).^2;
D3 = D1;
D4 = D2;

I1 = (sin(pi*(a/Lamda1)*sin(Theta)*N)./(N*sin(pi*(a/Lamda1)*sin(Theta)))).^2;
I2 = (sin(pi*(a/Lamda2)*sin(Theta)*N)./(N*sin(pi*(a/Lamda2)*sin(Theta)))).^2;
I3 = I1;
I4 = I2;

II1 = (cos((pi/Lamda1)*(d*sin(Theta)+H1))).^2;
II2 = (cos((pi/Lamda2)*(d*sin(Theta)+H2))).^2;
II3 = (cos((pi/Lamda1)*(d*sin(Theta)+H3))).^2;
II4 = (cos((pi/Lamda2)*(d*sin(Theta)+H4))).^2;

P1 = D1.*I1.*II1;
P2 = D2.*I2.*II2;
P3 = D1.*I1.*II3;
P4 = D2.*I2.*II4;

figure(1);
subplot(2,1,1);
plot(Theta,P1,Theta,P2,Theta,D1,Theta,D2);
axis([-0.8 0.8 0 1]);                  % PLOTS LIMITS                    
xlabel('\theta','Fontsize',12);
legend('P1(\theta)','P2(\theta)','D1(\theta)','D2(\theta)');

subplot(2,1,2);
plot(Theta,P3,Theta,P4,Theta,D3,Theta,D4);
axis([-0.8 0.8 0 1]);                  % PLOTS LIMITS                    
xlabel('\theta','Fontsize',12);
legend('P3(\theta)','P4(\theta)','D3(\theta)','D4(\theta)');`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'DA3FECOR',
    title: "DA3FECOR - DA3FECOR\r",
    description: "DA3FECOR\r",
    category: "Optics - Diffraction",
    chapter: '3',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# DA3FECOR
# Cornu's spiral is obtained by plotting Fresnel's Integrals C(Y) and S(Y) on x and y
# axis, respectively.
# The highest value f of Y is globally defined


f=5
Y=(0:0.01:f)
[t,SY] = ode45(@Sf,Y,[0])
[t,CY] = ode45(@Cf,Y,[0])
fig = plt.figure(1)

plt.plot(CY,SY)

plt.xlim(0, 0.8)
plt.ylim(0, 0.8)

xlabel('C(Y)','Fontsize',12)
plt.legend(['S(Y)'])
Out = np.sin((np.pi/2)*T**2)
Out = np.cos((np.pi/2)*T**2)
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% DA3FECOR
% Cornu's spiral is obtained by plotting Fresnel's Integrals C(Y) and S(Y) on x and y
% axis, respectively.
% The highest value f of Y is globally defined
function DA3FECOR()

f=5;
Y=(0:0.01:f);

[t,SY] = ode45(@Sf,Y,[0]);
[t,CY] = ode45(@Cf,Y,[0]);


figure(1);
plot(CY,SY);
axis([0 0.8 0 0.8]);                
xlabel('C(Y)','Fontsize',12);
legend('S(Y)');





function Out=Sf(T,X)
Out = sin((pi/2)*T^2);
function Out=Cf(T,X)
Out = cos((pi/2)*T^2);
`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'C1COH2S',
    title: "C1COH2S - C1COH2S\r",
    description: "C1COH2S\r",
    category: "Optics - Coherence",
    chapter: '4',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# C1COH2S
# Intensity of two sources separated by s. Superposition of two double
# slit pattern.
# The slits have width d and separation a, one pattern is untilted with ? = 0, the
# other tilted by ? = s/Z , distance from sources to slit is Z.
# Distance from slit to screen is X, coordinate on screen is Y, Y/X = ?.
# By enlarging ?, starting from 0, one finds the first " fringe disappearence". If ?
# is further enlarged, the fringes reappear, but now the minima are not zero.
# Another point of view: Fringes may disapear for constant s and changing a.


Theta = np.arange(-0.006, 0.006+0.00009, 0.00009)
d = 0.05
a = 1
Z = 9000
s1 = 0
s2 = 1.5
s3 = 2.25
s4 = 2.6
Psi1 = s1/Z
Psi2 = s2/Z
Psi3 = s3/Z
Psi4 = s4/Z
Lamda = 0.0005
I1= ((np.sin(np.pi*(d/Lamda)*np.sin(Theta))**2)/((np.pi*(d/Lamda)*np.sin(Theta))**2))*(np.cos(np.pi*(a/Lamda)*np.sin(Theta)))**2
II1= ((np.sin(np.pi*(d/Lamda)*np.sin(Theta))**2)/((np.pi*(d/Lamda)*np.sin(Theta))**2))*(np.cos(np.pi*(a/Lamda)*(np.sin(Theta)+np.sin(Psi1))))**2
fig = plt.figure(1)

plt.subplot(2, 2, 1)

plt.plot(Theta,I1+II1)

plt.xlim(-0.006, 0.006)
plt.ylim(0, 2)
;                  # PLOTS LIMITS                    
plt.xlabel('\theta')
plt.legend(['I1(\theta)+II1(\theta)'])
II2= ((np.sin(np.pi*(d/Lamda)*np.sin(Theta))**2)/((np.pi*(d/Lamda)*np.sin(Theta))**2))*(np.cos(np.pi*(a/Lamda)*(np.sin(Theta)+np.sin(Psi2))))**2
plt.subplot(2, 2, 2)

plt.plot(Theta,I1+II2)

plt.xlim(-0.006, 0.006)
plt.ylim(0, 2)
;                  # PLOTS LIMITS                    
plt.xlabel('\theta')
plt.legend(['I1(\theta)+II2(\theta)'])
II3= ((np.sin(np.pi*(d/Lamda)*np.sin(Theta))**2)/((np.pi*(d/Lamda)*np.sin(Theta))**2))*(np.cos(np.pi*(a/Lamda)*(np.sin(Theta)+np.sin(Psi3))))**2
plt.subplot(2, 2, 3)

plt.plot(Theta,I1+II3)

plt.xlim(-0.006, 0.006)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('\theta')
plt.legend(['I1(\theta)+II3(\theta)'])
II4= ((np.sin(np.pi*(d/Lamda)*np.sin(Theta))**2)/((np.pi*(d/Lamda)*np.sin(Theta))**2))*(np.cos(np.pi*(a/Lamda)*(np.sin(Theta)+np.sin(Psi4))))**2
plt.subplot(2, 2, 4)

plt.plot(Theta,I1+II4)

plt.xlim(-0.006, 0.006)
plt.ylim(0, 1.5)
;                  # PLOTS LIMITS                    
plt.xlabel('\theta')
plt.legend(['I1(\theta)+II4(\theta)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `%C1COH2S
%Intensity of two sources separated by s. Superposition of two double
%slit pattern.
%The slits have width d and separation a, one pattern is untilted with ? = 0, the
%other tilted by ? = s/Z , distance from sources to slit is Z.
%Distance from slit to screen is X, coordinate on screen is Y, Y/X = ?.
%By enlarging ?, starting from 0, one finds the first " fringe disappearence". If ?
%is further enlarged, the fringes reappear, but now the minima are not zero.
%Another point of view: Fringes may disapear for constant s and changing a.

function C1COH2S;

Theta = (-0.006:0.00009:0.006);
d = 0.05;
a = 1;
Z = 9000;
s1 = 0;
s2 = 1.5;
s3 = 2.25;
s4 = 2.6;
Psi1 = s1/Z;
Psi2 = s2/Z;
Psi3 = s3/Z;
Psi4 = s4/Z;
Lamda = 0.0005;

I1= ((sin(pi*(d/Lamda)*sin(Theta)).^2)./((pi*(d/Lamda)*sin(Theta)).^2)).*(cos(pi*(a/Lamda)*sin(Theta))).^2;

II1= ((sin(pi*(d/Lamda)*sin(Theta)).^2)./((pi*(d/Lamda)*sin(Theta)).^2)).*(cos(pi*(a/Lamda)*(sin(Theta)+sin(Psi1)))).^2;

figure(1);
subplot(2,2,1);
plot(Theta,I1+II1);
axis([-0.006 0.006 0 2]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('I1(\theta)+II1(\theta)'); 

II2= ((sin(pi*(d/Lamda)*sin(Theta)).^2)./((pi*(d/Lamda)*sin(Theta)).^2)).*(cos(pi*(a/Lamda)*(sin(Theta)+sin(Psi2)))).^2;

subplot(2,2,2);
plot(Theta,I1+II2);
axis([-0.006 0.006 0 2]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('I1(\theta)+II2(\theta)'); 

II3= ((sin(pi*(d/Lamda)*sin(Theta)).^2)./((pi*(d/Lamda)*sin(Theta)).^2)).*(cos(pi*(a/Lamda)*(sin(Theta)+sin(Psi3)))).^2;

subplot(2,2,3);
plot(Theta,I1+II3);
axis([-0.006 0.006 0 1]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('I1(\theta)+II3(\theta)'); 

II4= ((sin(pi*(d/Lamda)*sin(Theta)).^2)./((pi*(d/Lamda)*sin(Theta)).^2)).*(cos(pi*(a/Lamda)*(sin(Theta)+sin(Psi4)))).^2;

subplot(2,2,4);
plot(Theta,I1+II4);
axis([-0.006 0.006 0 1.5]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('I1(\theta)+II4(\theta)'); 


`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'C2COHEX',
    title: "C2COHEX - C2COHEX\r",
    description: "C2COHEX\r",
    category: "Optics - Coherence",
    chapter: '4',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# C2COHEX

# Intensity of an extended source of width s and interfernce diffraction on a
# double slit.

# Slit openings d and separation a. Distance from source to slit Z, from slit to
# screen X, coordinate on screen is Y, small angle approximation Y/X = ?.




a=1
d=0.05
Lamda = 0.0005
Z = 9000
s1 = 1
s2 = 1.5
s3 = 4.5
s4 = 5
Psi1 = s1/Z
Psi2 = s2/Z
Psi3 = s3/Z
Psi4 = s4/Z
k=0:1:200
Theta =0.01-k*0.0001
 nx = length(Theta)
 for r=1:nx
    I1(r)= quad(@fc,0,Psi1,[],[],Theta(r))
    I2(r)= quad(@fc,0,Psi2,[],[],Theta(r))
    I3(r)= quad(@fc,0,Psi3,[],[],Theta(r))
    I4(r)= quad(@fc,0,Psi4,[],[],Theta(r))
fig = plt.figure(1)

plt.subplot(2, 2, 1)

plt.plot(Theta,I1)

plt.xlim(-0.01, 0.01)
plt.ylim(0, 3*10**(-4))
;                  # PLOTS LIMITS                    
plt.xlabel('\theta')
plt.legend(['I1(\theta)'])
plt.subplot(2, 2, 2)

plt.plot(Theta,I2)

plt.xlim(-0.01, 0.01)
plt.ylim(0, 3*10**(-4))
;                  # PLOTS LIMITS                    
plt.xlabel('\theta')
plt.legend(['I2(\theta)'])
plt.subplot(2, 2, 3)

plt.plot(Theta,I3)

plt.xlim(-0.01, 0.01)
plt.ylim(0, 3*10**(-4))
;                  # PLOTS LIMITS                    
plt.xlabel('\theta')
plt.legend(['I3(\theta)'])
plt.subplot(2, 2, 4)

plt.plot(Theta,I4)

plt.xlim(-0.01, 0.01)
plt.ylim(0, 3*10**(-4))
;                  # PLOTS LIMITS                    
plt.xlabel('\theta')
plt.legend(['I4(\theta)'])
Out = ((np.sin(np.pi*(d/Lamda)*(np.sin(Theta)+np.sin(Psi)))**2)/((np.pi*(d/Lamda)*(np.sin(Theta)+np.sin(Psi)))**2))*np.cos(np.pi*(a/Lamda)*(np.sin(Theta)+np.sin(Psi)))**2
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% C2COHEX

% Intensity of an extended source of width s and interfernce diffraction on a
% double slit.

% Slit openings d and separation a. Distance from source to slit Z, from slit to
% screen X, coordinate on screen is Y, small angle approximation Y/X = ?.



function C2COHEX;
global a d Lamda Z s1 Psi1 k Theta;
a=1;
d=0.05;
Lamda = 0.0005;
Z = 9000;
s1 = 1;
s2 = 1.5;
s3 = 4.5;
s4 = 5;

Psi1 = s1/Z;
Psi2 = s2/Z;
Psi3 = s3/Z;
Psi4 = s4/Z;

k=0:1:200;
Theta =0.01-k*0.0001;


 nx = length(Theta);
 for r=1:nx;
  
    I1(r)= quad(@fc,0,Psi1,[],[],Theta(r));
    I2(r)= quad(@fc,0,Psi2,[],[],Theta(r));
    I3(r)= quad(@fc,0,Psi3,[],[],Theta(r));
    I4(r)= quad(@fc,0,Psi4,[],[],Theta(r));
   
   
    
end;


figure(1);
subplot(2,2,1);
plot(Theta,I1);
axis([-0.01 0.01 0 3*10^(-4)]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('I1(\theta)');

subplot(2,2,2);
plot(Theta,I2);
axis([-0.01 0.01 0 3*10^(-4)]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('I2(\theta)');

subplot(2,2,3);
plot(Theta,I3);
axis([-0.01 0.01 0 3*10^(-4)]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('I3(\theta)');

subplot(2,2,4);
plot(Theta,I4);
axis([-0.01 0.01 0 3*10^(-4)]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('I4(\theta)');

function Out=fc(Psi,Theta)
global a d Lamda Z s1 Psi1;
Out = ((sin(pi*(d/Lamda)*(sin(Theta)+sin(Psi))).^2)./((pi*(d/Lamda)*(sin(Theta)+sin(Psi))).^2)).*cos(pi*(a/Lamda)*(sin(Theta)+sin(Psi))).^2;
`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'C3VIS2S',
    title: "C3VIS2S - C3VIS2S\r",
    description: "C3VIS2S\r",
    category: "Optics - Coherence",
    chapter: '4',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# C3VIS2S

# Visibility for two point sources.
# We have set Y'/X equal to s/Z


a = 1
Lamda = 0.0005
Z = 9000
s = np.arange(0.01, 10+0.01, 0.01)
V = np.cos(np.pi*((a*s)/(Lamda*Z)))
fig = plt.figure(1)

plt.plot(s,np.abs(V)
)
plt.xlim(0, 10)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('s')
plt.legend(['abs(V(s))'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% C3VIS2S

% Visibility for two point sources.
% We have set Y'/X equal to s/Z

function C3VIS2S;

a = 1;
Lamda = 0.0005;
Z = 9000;
s = (0.01:0.01:10);

V = cos(pi*((a*s)/(Lamda*Z)));

figure(1);
plot(s,abs(V));
axis([0 10 0 1]);                  % PLOTS LIMITS                    
xlabel('s');
legend('abs(V(s))');`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'C4VISEX',
    title: "C4VISEX - C4VISEX\r",
    description: "C4VISEX\r",
    category: "Optics - Coherence",
    chapter: '4',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# C4VISEX
# Visibility for an extended source.
# We have set Y'/X equal to s/Z

a = 1
Lamda = 0.0005
Z = 9000
s = 0.01:0.01:10
VV = np.sin(np.pi*((a*s)/(Lamda*Z)))/(np.pi*((a*s)/(Lamda*Z)))
fig = plt.figure(1)

plt.plot(s,np.abs(VV)
)
plt.xlim(0, 10)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('s')
plt.legend(['abs(VV(s))'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% C4VISEX
% Visibility for an extended source.
% We have set Y'/X equal to s/Z
function C4VISEX;

a = 1;
Lamda = 0.0005;
Z = 9000;
s = 0.01:0.01:10;

VV = sin(pi*((a*s)/(Lamda*Z)))./(pi*((a*s)/(Lamda*Z)));

figure(1);
plot(s,abs(VV));
axis([0 10 0 1]);                  % PLOTS LIMITS                    
xlabel('s');
legend('abs(VV(s))')`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'C5MICHSTS',
    title: "C5MICHSTS - C5MICHSTS\r",
    description: "C5MICHSTS\r",
    category: "Optics - Coherence",
    chapter: '4',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# C5MICHSTS
# Michelson's Stellar Interferometer
# Diffraction angle Y/X, wavelength ?, angle to be determined is ?.
# Interferometer distance of Mirror M1 and M4 is h.

# In the real set-up we change h to go from fringe pattern to no fringe pattern. From the
# difference of these two values we calculate the angle ?.

# ?n this simulation we choose an angle ? and show that the fringe pattern
# changes for the two values of h we determine.
# Example h equal 100 and 95.

Phi = 0.00005
X = 4000
Lamda = 0.0005
d = 0.5
h = 95
Y= np.arange(-30, 30+0.1, 0.1)
uI = (np.cos(np.pi*d*(Y/(X*Lamda))))**2
uII = (np.cos(np.pi*((Y/X)*d-h*Phi)/Lamda))**2
# This is an indication if there are fringes or not:
fig = plt.figure(1)

plt.plot(Y,uI+uII,Y,uI,Y,uII)

plt.xlim(-30, 30)
plt.ylim(0, 1.5)
;                  # PLOTS LIMITS                    
plt.xlabel('Y')
plt.legend(['uI(Y)+uII(Y)', 'uI(Y)', 'uII(Y)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% C5MICHSTS
% Michelson's Stellar Interferometer
% Diffraction angle Y/X, wavelength ?, angle to be determined is ?.
% Interferometer distance of Mirror M1 and M4 is h.

% In the real set-up we change h to go from fringe pattern to no fringe pattern. From the
% difference of these two values we calculate the angle ?.

% ?n this simulation we choose an angle ? and show that the fringe pattern
% changes for the two values of h we determine.
% Example h equal 100 and 95.
function C5MICHSTS;

Phi = 0.00005;
X = 4000;
Lamda = 0.0005;
d = 0.5;
h = 95;
Y= (-30:0.1:30);

uI = (cos(pi*d*(Y/(X*Lamda)))).^2;
uII = (cos(pi*((Y/X)*d-h*Phi)/Lamda)).^2;

%  This is an indication if there are fringes or not

figure(1);
plot(Y,uI+uII,Y,uI,Y,uII);
axis([-30 30 0 1.5]);                  % PLOTS LIMITS                    
xlabel('Y');
legend('uI(Y)+uII(Y)','uI(Y)','uII(Y)');`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'C6SUPERS',
    title: "C6SUPERS - C6SUPERS\r",
    description: "C6SUPERS\r",
    category: "Optics - Coherence",
    chapter: '4',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# C6SUPERS

# (i) of four different wavelength and (ii) for the integration over the same wavelength interval.
# Demonstration of the superposition of waves .
# The medium wavelength is ?m = 2

# 1. Summation over four waves


x = np.arange(-200, 200+0.5, 0.5)
Lamda1=1.85
Lamda2=1.95
Lamda3=2.05
Lamda4=2.15
y11=np.cos(2*np.pi*x/Lamda1)
y12=np.cos(2*np.pi*x/Lamda2)
y13=np.cos(2*np.pi*x/Lamda3)
y14=np.cos(2*np.pi*x/Lamda4)
y1=y11+y12+y13+y14
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(x,y1)

plt.xlim(-200, 200)
plt.ylim(-5, 5)
;                  # PLOTS LIMITS                    
plt.xlabel('x')
plt.legend(['y1(x)'])
# 2.Integration over the wavelength interval fro the superposition
nx = length(x)
for r=1:nx
       y41(r)= quad(@y41f,1.85,2.15,[],[],x(r))
# y41=quad(@y41f,1.85,2.15,0.1)
# y41 = quad(y41f,1.85,2.15,0.1)
plt.subplot(2, 1, 2)

plt.plot(x,y41)

plt.xlim(-200, 200)
plt.ylim(-0.5, 0.5)
;                  # PLOTS LIMITS                    
plt.xlabel('x')
plt.legend(['y41(x)'])
Out = np.cos(2*np.pi*x/Lamda)
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% C6SUPERS

% (i) of four different wavelength and (ii) for the integration over the same wavelength interval.
% Demonstration of the superposition of waves .
% The medium wavelength is ?m = 2

% 1. Summation over four waves

function C6SUPERS;

x = (-200:0.5:200);

Lamda1=1.85;
Lamda2=1.95;
Lamda3=2.05;
Lamda4=2.15;
y11=cos(2*pi*x/Lamda1);
y12=cos(2*pi*x/Lamda2);
y13=cos(2*pi*x/Lamda3);
y14=cos(2*pi*x/Lamda4);
y1=y11+y12+y13+y14;

figure(1);
subplot(2,1,1);
plot(x,y1);
axis([-200 200 -5 5]);                  % PLOTS LIMITS                    
xlabel('x');
legend('y1(x)');

% 2.Integration over the wavelength interval fro the superposition
nx = length(x);
for r=1:nx;
       y41(r)= quad(@y41f,1.85,2.15,[],[],x(r));    
end;
%y41=quad(@y41f,1.85,2.15,0.1);
%y41 = quad(y41f,1.85,2.15,0.1);


   

subplot(2,1,2);
plot(x,y41);
axis([-200 200 -0.5 0.5]);                  % PLOTS LIMITS                    
xlabel('x');
legend('y41(x)');


function Out = y41f(Lamda,x) 
Out = cos(2*pi*x./Lamda);`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'C7COHTEMS',
    title: "C7COHTEMS - C7COHTEMS\r",
    description: "C7COHTEMS\r",
    category: "Optics - Coherence",
    chapter: '4',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# C7COHTEMS

# Demonstration of the superposition of two waves when integrating over a
# wavelength interval.

# The medium wavelength is ?m = 2. A phase difference of ? in the x coordinate is studied
# for 0, 1/2 and 1 medium wavelength.


x = np.arange(-200, 200+1, 1)
LamdaM = 2
a1 = 0
a2 = 0.5
a3 = 1
Delta1 = LamdaM * a1
Delta2 = LamdaM * a2
Delta3 = LamdaM * a3
nx = length(x)
for r=1:nx
       y41(r)= quadl(@y41f,1.85,2.15,[],[],x(r))
       y51(r)= quadl(@y51f,1.85,2.15,[],[],x(r))
       y61(r)= quadl(@y61f,1.85,2.15,[],[],x(r))
# 1. Integration over the wavelength interval from 1.85 to 2.15 for the superposition of two
# of the waves, no phase difference, using ?1=?m*a1, where ?m is medium wavelength.
fig = plt.figure(1)

plt.subplot(3, 1, 1)

plt.plot(x,y41)

plt.xlim(-200, 200)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('x')
plt.legend(['y41(x)'])
# 2. Integration over the wavelength interval from 1.85 to 2.15 for the superposition of two
# waves, for phase difference, using ?= ??m*a2. The phase difference is (1/2) ?m.
# We have to use an expanded scale to see the result
plt.subplot(3, 1, 2)

plt.plot(x,y51)

plt.xlim(-200, 200)
plt.ylim(-0.05, 0.05)
;                  # PLOTS LIMITS                    
plt.xlabel('x')
plt.legend(['y51(x)'])
# 3. Integration over the wavelength interval from 1.85 to 2.15 for for the
# superposition of two waves, for phase difference, using ?3 = ??m*a3.
# The phase difference is 1 ?m. .

plt.subplot(3, 1, 3)

plt.plot(x,y61)

plt.xlim(-200, 200)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('x')
plt.legend(['y61(x)'])
Out = np.cos(2*np.pi*(x-Delta1)/Lamda) + np.cos(2*np.pi*x/Lamda)
Out = np.cos(2*np.pi*(x-Delta2)/Lamda) + np.cos(2*np.pi*x/Lamda)
Out = np.cos(2*np.pi*(x-Delta3)/Lamda) + np.cos(2*np.pi*x/Lamda)
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% C7COHTEMS

% Demonstration of the superposition of two waves when integrating over a
% wavelength interval.

% The medium wavelength is ?m = 2. A phase difference of ? in the x coordinate is studied
% for 0, 1/2 and 1 medium wavelength.

function C7COHTEMS;
global Delta1 Delta2 Delta3;
x = (-200:1:200);

LamdaM = 2;
a1 = 0;
a2 = 0.5;
a3 = 1;
Delta1 = LamdaM * a1;
Delta2 = LamdaM * a2;
Delta3 = LamdaM * a3;

nx = length(x);
for r=1:nx;
       y41(r)= quadl(@y41f,1.85,2.15,[],[],x(r));    
       y51(r)= quadl(@y51f,1.85,2.15,[],[],x(r));    
       y61(r)= quadl(@y61f,1.85,2.15,[],[],x(r)); 
end;



% 1. Integration over the wavelength interval from 1.85 to 2.15 for the superposition of two
% of the waves, no phase difference, using ?1=?m*a1, where ?m is medium wavelength.
figure(1);
subplot(3,1,1);
plot(x,y41);
axis([-200 200 -1 1]);                  % PLOTS LIMITS                    
xlabel('x');
legend('y41(x)');


% 2. Integration over the wavelength interval from 1.85 to 2.15 for the superposition of two
% waves, for phase difference, using ?= ??m*a2. The phase difference is (1/2) ?m.
% We have to use an expanded scale to see the result
subplot(3,1,2);
plot(x,y51);
axis([-200 200 -0.05 0.05]);                  % PLOTS LIMITS                    
xlabel('x');
legend('y51(x)');

% 3. Integration over the wavelength interval from 1.85 to 2.15 for for the
% superposition of two waves, for phase difference, using ?3 = ??m*a3.
% The phase difference is 1 ?m. .

subplot(3,1,3);
plot(x,y61);
axis([-200 200 -1 1]);                  % PLOTS LIMITS                    
xlabel('x');
legend('y61(x)');






function Out = y41f(Lamda,x) 
global Delta1;
Out = cos(2*pi*(x-Delta1)./Lamda) + cos(2*pi*x./Lamda);

function Out = y51f(Lamda,x) 
global Delta2;
Out = cos(2*pi*(x-Delta2)./Lamda) + cos(2*pi*x./Lamda);

function Out = y61f(Lamda,x) 
global Delta3;
Out = cos(2*pi*(x-Delta3)./Lamda) + cos(2*pi*x./Lamda);`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'C8CCOHINTS',
    title: "C8CCOHINTS - C8COHINTS\r",
    description: "C8COHINTS\r",
    category: "Optics - Coherence",
    chapter: '4',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# C8COHINTS

# Graphs for demonstration of the intensity of the superposition of two waves when
# integrating over a wavelength interval.

# The medium wavelength is ?m = 2. A phase difference of ? in the x coordinate is studied
# for 0, 1/2 and 1 medium wavelength.

x = np.arange(-200, 200+0.75, 0.75)
LamdaM = 2
a1 = 0
a2 = 0.5
a3 = 1
Delta1 =LamdaM * a1
Delta2 = LamdaM * a2
Delta3 = LamdaM * a3
# 1. Integration over the wavelength interval from 1.85 to 2.15 for the intensity
# superposition of two of the waves, no phase difference, using ????1 = ????m*a1,
# where ?m is the medium wavelength .
nx = length(x)
for r=1:nx
       y41(r)= quadl(@y41f,1.85,2.15,[],[],x(r))
       y51(r)= quadl(@y51f,1.85,2.15,[],[],x(r))
       y61(r)= quadl(@y61f,1.85,2.15,[],[],x(r))
fig = plt.figure(1)

plt.subplot(3, 1, 1)

plt.plot(x,y41**2)

plt.xlim(-200, 200)
plt.ylim(0, 0.4)
;                  # PLOTS LIMITS                    
plt.xlabel('x')
plt.legend(['y41(x)^2'])
# 2. Integration over the wavelength interval from 1.85 to 2.15 for the intensity
# superposition of two waves, for phase difference, using ? = a2.
# The phase difference is (1/2) ?m


plt.subplot(3, 1, 2)

plt.plot(x,y51**2)

plt.xlim(-200, 200)
plt.ylim(0, 0.01)
;                  # PLOTS LIMITS                    
plt.xlabel('x')
plt.legend(['y51(x)^2'])
# 3. Integration over the wavelength interval from 1.85 to 2.15 for the intensity superposition
# of two waves, for phase difference, using ?3 = LamdaM*a3.
# The phase difference is 1 LamdaM

plt.subplot(3, 1, 3)

plt.plot(x,y61**2)

plt.xlim(-200, 200)
plt.ylim(0, 0.4)
;                  # PLOTS LIMITS                    
plt.xlabel('x')
plt.legend(['y61(x)^2'])
Out = np.cos(2*np.pi*(x-Delta1)/Lamda) + np.cos(2*np.pi*x/Lamda)
Out = np.cos(2*np.pi*(x-Delta2)/Lamda) + np.cos(2*np.pi*x/Lamda)
Out = np.cos(2*np.pi*(x-Delta3)/Lamda) + np.cos(2*np.pi*x/Lamda)
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% C8COHINTS

% Graphs for demonstration of the intensity of the superposition of two waves when
% integrating over a wavelength interval.

% The medium wavelength is ?m = 2. A phase difference of ? in the x coordinate is studied
% for 0, 1/2 and 1 medium wavelength.
function C8CCOHINTS;
global Delta1 Delta2 Delta3;
x = (-200:0.75:200);

LamdaM = 2;

a1 = 0;
a2 = 0.5;
a3 = 1;


Delta1 =LamdaM * a1;
Delta2 = LamdaM * a2;
Delta3 = LamdaM * a3;

% 1. Integration over the wavelength interval from 1.85 to 2.15 for the intensity
% superposition of two of the waves, no phase difference, using ????1 = ????m*a1,
% where ?m is the medium wavelength .
nx = length(x);
for r=1:nx;
       y41(r)= quadl(@y41f,1.85,2.15,[],[],x(r));    
       y51(r)= quadl(@y51f,1.85,2.15,[],[],x(r));    
       y61(r)= quadl(@y61f,1.85,2.15,[],[],x(r)); 
end;

figure(1);
subplot(3,1,1);
plot(x,y41.^2);
axis([-200 200 0 0.4]);                  % PLOTS LIMITS                    
xlabel('x');
legend('y41(x)^2');

% 2. Integration over the wavelength interval from 1.85 to 2.15 for the intensity
% superposition of two waves, for phase difference, using ? = a2.
% The phase difference is (1/2) ?m


subplot(3,1,2);
plot(x,y51.^2);
axis([-200 200 0 0.01]);                  % PLOTS LIMITS                    
xlabel('x');
legend('y51(x)^2');

% 3. Integration over the wavelength interval from 1.85 to 2.15 for the intensity superposition
% of two waves, for phase difference, using ?3 = LamdaM*a3.
% The phase difference is 1 LamdaM

subplot(3,1,3);
plot(x,y61.^2);
axis([-200 200 0 0.4]);                  % PLOTS LIMITS                    
xlabel('x');
legend('y61(x)^2');




function Out = y41f(Lamda,x) 
global Delta1;
Out = cos(2*pi*(x-Delta1)./Lamda) + cos(2*pi*x./Lamda);

function Out = y51f(Lamda,x) 
global Delta2;
Out = cos(2*pi*(x-Delta2)./Lamda) + cos(2*pi*x./Lamda);

function Out = y61f(Lamda,x) 
global Delta3;
Out = cos(2*pi*(x-Delta3)./Lamda) + cos(2*pi*x./Lamda);`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'M11POELIPLIS',
    title: "M11POELIPLIS - M11POELIPLIS\r",
    description: "M11POELIPLIS\r",
    category: "Optics - Matrix Methods",
    chapter: '5',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# M11POELIPLIS
# Elliptical polarized light. Similar as discussed in FileFig.M9POELIP we plot
# np.cos( -2????x/360) on z- axis and np.cos( -2????x/360 + ????) on y-axis

x = np.arange(1, 360+1, 1)
Phi1 = 0
Phi2 = np.pi/4
Phi3 = np.pi/2
Phi4 = 3*np.pi/4
Phi5 = np.pi
Phi6 = (5*np.pi)/4
Phi7 = (3*np.pi)/2
Phi8 = 7*np.pi/4
y1 = np.cos(-2*np.pi*(x/360))
y2 = np.cos(-2*np.pi*(x/360))
y3 = np.cos(-2*np.pi*(x/360))
y4 = np.cos(-2*np.pi*(x/360))
y5 = np.cos(-2*np.pi*(x/360))
y6 = np.cos(-2*np.pi*(x/360))
y7 = np.cos(-2*np.pi*(x/360))
y8 = np.cos(-2*np.pi*(x/360))
yy1 = np.cos(-2*np.pi*(x/360) + Phi1)
yy2 = np.cos(-2*np.pi*(x/360) + Phi2)
yy3 = np.cos(-2*np.pi*(x/360) + Phi3)
yy4 = np.cos(-2*np.pi*(x/360) + Phi4)
yy5 = np.cos(-2*np.pi*(x/360) + Phi5)
yy6 = np.cos(-2*np.pi*(x/360) + Phi6)
yy7 = np.cos(-2*np.pi*(x/360) + Phi7)
yy8 = np.cos(-2*np.pi*(x/360) + Phi8)
fig = plt.figure(1)

plt.subplot(4, 1, 1)

plt.plot(y1,yy1)

plt.xlim(-1, 1)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('y1(x)')
plt.legend(['yy1(x)'])
plt.subplot(4, 1, 2)

plt.plot(y2,yy2)

plt.xlim(-1, 1)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('y2(x)')
plt.legend(['yy2(x)'])
plt.subplot(4, 1, 3)

plt.plot(y3,yy3)

plt.xlim(-1, 1)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('y3(x)')
plt.legend(['yy3(x)'])
plt.subplot(4, 1, 4)

plt.plot(y4,yy4)

plt.xlim(-1, 1)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('y4(x)')
plt.legend(['yy4(x)'])
fig = plt.figure(2)

plt.subplot(4, 1, 1)

plt.plot(y5,yy5)

plt.xlim(-1, 1)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('y5(x)')
plt.legend(['yy5(x)'])
plt.subplot(4, 1, 2)

plt.plot(y6,yy6)

plt.xlim(-1, 1)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('y6(x)')
plt.legend(['yy6(x)'])
plt.subplot(4, 1, 3)

plt.plot(y7,yy7)

plt.xlim(-1, 1)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('y7(x)')
plt.legend(['yy7(x)'])
plt.subplot(4, 1, 4)

plt.plot(y8,yy8)

plt.xlim(-1, 1)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('y8(x)')
plt.legend(['yy8(x)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% M11POELIPLIS
% Elliptical polarized light. Similar as discussed in FileFig.M9POELIP we plot
% cos( -2????x/360) on z- axis and cos( -2????x/360 + ????) on y-axis
function M11POELIPLIS;
x = (1:1:360);
Phi1 = 0;
Phi2 = pi/4;
Phi3 = pi/2;
Phi4 = 3*pi/4;
Phi5 = pi;
Phi6 = (5*pi)/4;
Phi7 = (3*pi)/2;
Phi8 = 7*pi/4;
y1 = cos(-2*pi*(x/360));
y2 = cos(-2*pi*(x/360));
y3 = cos(-2*pi*(x/360));
y4 = cos(-2*pi*(x/360));
y5 = cos(-2*pi*(x/360));
y6 = cos(-2*pi*(x/360));
y7 = cos(-2*pi*(x/360));
y8 = cos(-2*pi*(x/360));
yy1 = cos(-2*pi*(x/360) + Phi1);
yy2 = cos(-2*pi*(x/360) + Phi2);
yy3 = cos(-2*pi*(x/360) + Phi3);
yy4 = cos(-2*pi*(x/360) + Phi4);
yy5 = cos(-2*pi*(x/360) + Phi5);
yy6 = cos(-2*pi*(x/360) + Phi6);
yy7 = cos(-2*pi*(x/360) + Phi7);
yy8 = cos(-2*pi*(x/360) + Phi8);


figure(1);
subplot(4,1,1);
plot(y1,yy1);
axis([-1 1 -1 1]);                  % PLOTS LIMITS                    
xlabel('y1(x)');
legend('yy1(x)');

subplot(4,1,2);
plot(y2,yy2);
axis([-1 1 -1 1]);                  % PLOTS LIMITS                    
xlabel('y2(x)');
legend('yy2(x)');

subplot(4,1,3);
plot(y3,yy3);
axis([-1 1 -1 1]);                  % PLOTS LIMITS                    
xlabel('y3(x)');
legend('yy3(x)');

subplot(4,1,4);
plot(y4,yy4);
axis([-1 1 -1 1]);                  % PLOTS LIMITS                    
xlabel('y4(x)');
legend('yy4(x)');

figure(2);
subplot(4,1,1);
plot(y5,yy5);
axis([-1 1 -1 1]);                  % PLOTS LIMITS                    
xlabel('y5(x)');
legend('yy5(x)');

subplot(4,1,2);
plot(y6,yy6);
axis([-1 1 -1 1]);                  % PLOTS LIMITS                    
xlabel('y6(x)');
legend('yy6(x)');

subplot(4,1,3);
plot(y7,yy7);
axis([-1 1 -1 1]);                  % PLOTS LIMITS                    
xlabel('y7(x)');
legend('yy7(x)');

subplot(4,1,4);
plot(y8,yy8);
axis([-1 1 -1 1]);                  % PLOTS LIMITS                    
xlabel('y8(x)');
legend('yy8(x)');`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'of',
    title: "of - M2FRN2L\r",
    description: "M2FRN2L\r",
    category: "Optics - Matrix Methods",
    chapter: '5',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# M2FRN2L
# Fresnel's formulas as function of angle of incidence for first medium 1 and
# second medium 2 and n1<n2.
# .
# 1. Reflection coefficients.
# Absolute value and imaginary parts for p-case and s-case.

Theta = np.arange(0.1, 90+0.1, 0.1)
n1 = 1
n2 = 1.5
rp = ((n2/n1)*np.cos(2*(np.pi/360)*Theta)-np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))/((n2/n1)*np.cos(2*(np.pi/360)*Theta)+np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))
rs = (np.cos(2*(np.pi/360)*Theta)-(n2/n1)*np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))/(np.cos(2*(np.pi/360)*Theta)+(n2/n1)*np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))
fig = plt.figure(1)

plt.subplot(2, 2, 1)

plt.plot(Theta,np.abs(rp)
)
plt.xlim(0, 100)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('\theta')
plt.title('p - case')
plt.legend(['abs(rp(\theta))'])
plt.subplot(2, 2, 2)

plt.plot(Theta,np.abs(rs)
)
plt.xlim(0, 100)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('\theta')
plt.title('s - case')
plt.legend(['abs(rs(\theta))'])
plt.subplot(2, 2, 3)

plt.plot(Theta,angle(rp)
)
plt.xlim(0, 100)
plt.ylim(-4, 4)
;                  # PLOTS LIMITS                    
plt.xlabel('\theta')
plt.legend(['angle(rp(\theta))'])
plt.subplot(2, 2, 4)

plt.plot(Theta,angle(rs)
)
plt.xlim(0, 100)
plt.ylim(-4, 4)
;                  # PLOTS LIMITS                    
plt.xlabel('\theta')
plt.legend(['angle(rs(\theta))'])
# 2. Transimission coefficient.
# Absolute value and imaginary value part for p-case and s-case.

tp = (2*np.cos(2*(np.pi/360)*Theta))/((n2/n1)*np.cos(2*(np.pi/360)*Theta)+np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))
ts = (2*np.cos(2*(np.pi/360)*Theta))/(np.cos(2*(np.pi/360)*Theta)+(n2/n1)*np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))
fig = plt.figure(2)

plt.subplot(2, 2, 1)

plt.plot(Theta,np.abs(tp)
)
plt.xlim(0, 100)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('\theta')
plt.title('p - case')
plt.legend(['abs(tp(\theta))'])
plt.subplot(2, 2, 2)

plt.plot(Theta,np.abs(ts)
)
plt.xlim(0, 100)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('\theta')
plt.title('s - case')
plt.legend(['abs(ts(\theta))'])
plt.subplot(2, 2, 3)

plt.plot(Theta,angle(tp)
)
plt.xlim(0, 100)
plt.ylim(-2, 3)
;                  # PLOTS LIMITS                    
plt.xlabel('\theta')
plt.legend(['angle(tp(\theta))'])
plt.subplot(2, 2, 4)

plt.plot(Theta,angle(ts)
)
plt.xlim(0, 100)
plt.ylim(-2, 3)
;                  # PLOTS LIMITS                    
plt.xlabel('\theta')
plt.legend(['angle(ts(\theta))'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% M2FRN2L
% Fresnel's formulas as function of angle of incidence for first medium 1 and
% second medium 2 and n1<n2.
% .
% 1. Reflection coefficients.
% Absolute value and imaginary parts for p-case and s-case.
function M2FRN2L;
Theta = (0.1:0.1:90);
n1 = 1;
n2 = 1.5;

rp = ((n2/n1)*cos(2*(pi/360)*Theta)-sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2))./((n2/n1)*cos(2*(pi/360)*Theta)+sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));
rs = (cos(2*(pi/360)*Theta)-(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2))./(cos(2*(pi/360)*Theta)+(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));

figure(1);
subplot(2,2,1);
plot(Theta,abs(rp));
axis([0 100 0 1]);                  % PLOTS LIMITS                    
xlabel('\theta');
title('p - case');
legend('abs(rp(\theta))');

subplot(2,2,2);
plot(Theta,abs(rs));
axis([0 100 0 1]);                  % PLOTS LIMITS                    
xlabel('\theta');
title('s - case');
legend('abs(rs(\theta))');

subplot(2,2,3);
plot(Theta,angle(rp));
axis([0 100 -4 4]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('angle(rp(\theta))');


subplot(2,2,4);
plot(Theta,angle(rs));
axis([0 100 -4 4]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('angle(rs(\theta))');

% 2. Transimission coefficient.
% Absolute value and imaginary value part for p-case and s-case.

tp = (2*cos(2*(pi/360)*Theta))./((n2/n1)*cos(2*(pi/360)*Theta)+sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));
ts = (2*cos(2*(pi/360)*Theta))./(cos(2*(pi/360)*Theta)+(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));

figure(2);
subplot(2,2,1);
plot(Theta,abs(tp));
axis([0 100 0 1]);                  % PLOTS LIMITS                    
xlabel('\theta');
title('p - case');
legend('abs(tp(\theta))');

subplot(2,2,2);
plot(Theta,abs(ts));
axis([0 100 0 1]);                  % PLOTS LIMITS                    
xlabel('\theta');
title('s - case');
legend('abs(ts(\theta))');

subplot(2,2,3);
plot(Theta,angle(tp));
axis([0 100 -2 3]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('angle(tp(\theta))');

subplot(2,2,4);
plot(Theta,angle(ts));
axis([0 100 -2 3]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('angle(ts(\theta))');

`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'of',
    title: "of - M3FRN2S\r",
    description: "M3FRN2S\r",
    category: "Optics - Matrix Methods",
    chapter: '5',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# M3FRN2S
# Fresnel's formulas as function of angle of incidence for first medium 1 and
# second medium 2 and n1>n2.

# 1. Reflection coefficients.
# Absolute value and imaginary parts for p-case and s-case.

n1 = 1.5
n2 = 1
Theta = np.arange(0.1, 90+0.1, 0.1)
rp = ((n2/n1)*np.cos(2*(np.pi/360)*Theta)-np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))/((n2/n1)*np.cos(2*(np.pi/360)*Theta)+np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))
rs = (np.cos(2*(np.pi/360)*Theta)-(n2/n1)*np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))/(np.cos(2*(np.pi/360)*Theta)+(n2/n1)*np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))
fig = plt.figure(1)

plt.subplot(2, 2, 1)

plt.plot(Theta,np.abs(rp)
)
plt.xlim(0, 100)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('\theta')
plt.title('p - case')
plt.legend(['abs(rp(\theta))'])
plt.subplot(2, 2, 2)

plt.plot(Theta,np.abs(rs)
)
plt.xlim(0, 100)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('\theta')
plt.title('s - case')
plt.legend(['abs(rs(\theta))'])
plt.subplot(2, 2, 3)

plt.plot(Theta,angle(rp)
)
plt.xlim(0, 100)
plt.ylim(-4, 4)
;                  # PLOTS LIMITS                    
plt.xlabel('\theta')
plt.legend(['angle(rp(\theta))'])
plt.subplot(2, 2, 4)

plt.plot(Theta,angle(rs)
)
plt.xlim(0, 100)
plt.ylim(-4, 4)
;                  # PLOTS LIMITS                    
plt.xlabel('\theta')
plt.legend(['angle(rs(\theta))'])
# 2. Transimission coefficient.
# Absolute value and imaginary value part for p-case and s-case.

tp = (2*np.cos(2*(np.pi/360)*Theta))/((n2/n1)*np.cos(2*(np.pi/360)*Theta)+np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))
ts = (2*np.cos(2*(np.pi/360)*Theta))/(np.cos(2*(np.pi/360)*Theta)+(n2/n1)*np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))
fig = plt.figure(2)

plt.subplot(2, 2, 1)

plt.plot(Theta,np.abs(tp)
)
plt.xlim(0, 100)
plt.ylim(0, 4)
;                  # PLOTS LIMITS                    
plt.xlabel('\theta')
plt.title('p - case')
plt.legend(['abs(tp(\theta))'])
plt.subplot(2, 2, 2)

plt.plot(Theta,np.abs(ts)
)
plt.xlim(0, 100)
plt.ylim(0, 2)
;                  # PLOTS LIMITS                    
plt.xlabel('\theta')
plt.title('s - case')
plt.legend(['abs(ts(\theta))'])
plt.subplot(2, 2, 3)

plt.plot(Theta,angle(tp)
)
plt.xlim(0, 100)
plt.ylim(-2, 3)
;                  # PLOTS LIMITS                    
plt.xlabel('\theta')
plt.legend(['angle(tp(\theta))'])
plt.subplot(2, 2, 4)

plt.plot(Theta,angle(ts)
)
plt.xlim(0, 100)
plt.ylim(-2, 3)
;                  # PLOTS LIMITS                    
plt.xlabel('\theta')
plt.legend(['angle(ts(\theta))'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% M3FRN2S
% Fresnel's formulas as function of angle of incidence for first medium 1 and
% second medium 2 and n1>n2.

% 1. Reflection coefficients.
% Absolute value and imaginary parts for p-case and s-case.
function M3FRN2S;
n1 = 1.5;
n2 = 1;

Theta = (0.1:0.1:90);


rp = ((n2/n1)*cos(2*(pi/360)*Theta)-sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2))./((n2/n1)*cos(2*(pi/360)*Theta)+sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));
rs = (cos(2*(pi/360)*Theta)-(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2))./(cos(2*(pi/360)*Theta)+(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));

figure(1);
subplot(2,2,1);
plot(Theta,abs(rp));
axis([0 100 0 1]);                  % PLOTS LIMITS                    
xlabel('\theta');
title('p - case');
legend('abs(rp(\theta))');

subplot(2,2,2);
plot(Theta,abs(rs));
axis([0 100 0 1]);                  % PLOTS LIMITS                    
xlabel('\theta');
title('s - case');
legend('abs(rs(\theta))');

subplot(2,2,3);
plot(Theta,angle(rp));
axis([0 100 -4 4]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('angle(rp(\theta))');

subplot(2,2,4);
plot(Theta,angle(rs));
axis([0 100 -4 4]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('angle(rs(\theta))');

% 2. Transimission coefficient.
% Absolute value and imaginary value part for p-case and s-case.

tp = (2*cos(2*(pi/360)*Theta))./((n2/n1)*cos(2*(pi/360)*Theta)+sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));
ts = (2*cos(2*(pi/360)*Theta))./(cos(2*(pi/360)*Theta)+(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));

figure(2);
subplot(2,2,1);
plot(Theta,abs(tp));
axis([0 100 0 4]);                  % PLOTS LIMITS                    
xlabel('\theta');
title('p - case');
legend('abs(tp(\theta))');

subplot(2,2,2);
plot(Theta,abs(ts));
axis([0 100 0 2]);                  % PLOTS LIMITS                    
xlabel('\theta');
title('s - case');
legend('abs(ts(\theta))');

subplot(2,2,3);
plot(Theta,angle(tp));
axis([0 100 -2 3]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('angle(tp(\theta))');

subplot(2,2,4);
plot(Theta,angle(ts));
axis([0 100 -2 3]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('angle(ts(\theta))');



`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'M4SNELL',
    title: "M4SNELL - M4SNELL\r",
    description: "M4SNELL\r",
    category: "Optics - Matrix Methods",
    chapter: '5',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# M4SNELL
# Snellius Law for real and imaginary angle of refraction.
# We have n1 sin?1 = n2 sin?2, or ?2 = asin((n1/n2)sin?1).
# For n1> n2, after ?1is larger than the criticl angle, ?2 becomes complex.
# with x + iy for ?2



# 1. Graph of ????2 = asin((n1/n2)sin????1) from 0 to 90 for n1<n2

Theta1 = np.arange(1, 90+1, 1)
n1 = 1
n2 = 1.5
Theta2 = asin((n1/n2)*np.sin(2*(np.pi/360)*Theta1))
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(Theta1,Theta2)

plt.xlim(0, 100)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
xlabel('\theta1','Fontsize',12)
plt.legend(['\theta2(\theta1)'])
plt.title('n1<n2')
# 2. Graph of ????2 = asin((n1/n2)sin????1) from 0 to 90 for n1>n2

Theta1 = np.arange(1, 90+1, 1)
nn1 = 1.5
nn2 =1
Theta2 = asin((nn1/nn2)*np.sin(2*(np.pi/360)*Theta1))
plt.subplot(2, 1, 2)

plt.plot(Theta1,Theta2)

plt.xlim(0, 60)
plt.ylim(0, 2)
;                  # PLOTS LIMITS                    
xlabel('\theta1','Fontsize',12)
plt.legend(['\theta2(\theta1)'])
plt.title('n1>n2')
# 3. Graphs of real and imaginary parts separately.

fig = plt.figure(2)

plt.subplot(1, 2, 1)

plt.plot(Theta1,real(Theta2)
)
plt.xlim(0, 100)
plt.ylim(0, 2)
;                  # PLOTS LIMITS                    
xlabel('\theta1','Fontsize',12)
plt.legend(['real(\theta2(\theta1))'])
plt.subplot(1, 2, 2)

plt.plot(Theta1,-imag(Theta2)
)
plt.xlim(0, 100)
plt.ylim(-1, 0)
;                  # PLOTS LIMITS                    
xlabel('\theta1','Fontsize',12)
plt.legend(['-imag(\theta2(\theta1))'])
Thetac = (360/(2*np.pi))*asin(nn2/nn1)
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% M4SNELL
% Snellius Law for real and imaginary angle of refraction.
% We have n1 sin?1 = n2 sin?2, or ?2 = asin((n1/n2)sin?1).
% For n1> n2, after ?1is larger than the criticl angle, ?2 becomes complex.
% with x + iy for ?2


function M4SNELL;
% 1. Graph of ????2 = asin((n1/n2)sin????1) from 0 to 90 for n1<n2

Theta1 = (1:1:90);
n1 = 1;
n2 = 1.5;
Theta2 = asin((n1/n2)*sin(2*(pi/360)*Theta1));

figure(1);
subplot(2,1,1);
plot(Theta1,Theta2);
axis([0 100 0 1]);                  % PLOTS LIMITS                    
xlabel('\theta1','Fontsize',12);
legend('\theta2(\theta1)');
title('n1<n2');

% 2. Graph of ????2 = asin((n1/n2)sin????1) from 0 to 90 for n1>n2

Theta1 = (1:1:90);
nn1 = 1.5;
nn2 =1;
Theta2 = asin((nn1/nn2)*sin(2*(pi/360)*Theta1));

subplot(2,1,2);
plot(Theta1,Theta2);
axis([0 60 0 2]);                  % PLOTS LIMITS                    
xlabel('\theta1','Fontsize',12);
legend('\theta2(\theta1)');
title('n1>n2');

% 3. Graphs of real and imaginary parts separately.

figure(2);
subplot(1,2,1);
plot(Theta1,real(Theta2));
axis([0 100 0 2]);                  % PLOTS LIMITS                    
xlabel('\theta1','Fontsize',12);
legend('real(\theta2(\theta1))');

subplot(1,2,2);
plot(Theta1,-imag(Theta2));
axis([0 100 -1 0]);                  % PLOTS LIMITS                    
xlabel('\theta1','Fontsize',12);
legend('-imag(\theta2(\theta1))');


Thetac = (360/(2*pi))*asin(nn2/nn1)`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'of',
    title: "of - M5FRINTN2L\r",
    description: "M5FRINTN2L\r",
    category: "Optics - Matrix Methods",
    chapter: '5',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# M5FRINTN2L

# Fresnel's formulas as function of angle of incidence for n1<n2
# for Rp = rp**2, Rs = rs**2, and Tp = 1- Rp, Ts = 1-Rs

# 1. Amplitude reflection coefficients.


n1 = 1
n2 = 1.5
Theta = np.arange(0, 90+0.4, 0.4)
rp = ((n2/n1)*np.cos(2*(np.pi/360)*Theta)-np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))/((n2/n1)*np.cos(2*(np.pi/360)*Theta)+np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))
rs = (np.cos(2*(np.pi/360)*Theta)-(n2/n1)*np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))/(np.cos(2*(np.pi/360)*Theta)+(n2/n1)*np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))
# 2. Reflection: Intensities

Rp = rp**2
Rs = rs**2
fig = plt.figure(1)

plt.subplot(2, 2, 1)

plt.plot(Theta,rp**2)

plt.xlim(0, 100)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('\theta')
plt.title('p - case')
plt.legend(['rp(\theta)^2'])
plt.subplot(2, 2, 2)

plt.plot(Theta,rs**2)

plt.xlim(0, 100)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('\theta')
plt.title('s - case')
plt.legend(['rs(\theta)^2'])
# 3. Transmission: Intensities

Tp = 1 - Rp
Ts = 1 - Rs
plt.subplot(2, 2, 3)

plt.plot(Theta,Tp)

plt.xlim(0, 100)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('\theta')
plt.legend(['Tp(\theta)'])
plt.subplot(2, 2, 4)

plt.plot(Theta,Ts)

plt.xlim(0, 100)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('\theta')
plt.legend(['Ts(\theta)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% M5FRINTN2L

% Fresnel's formulas as function of angle of incidence for n1<n2
% for Rp = rp^2, Rs = rs^2, and Tp = 1- Rp, Ts = 1-Rs

% 1. Amplitude reflection coefficients.

function M5FRINTN2L;
n1 = 1;
n2 = 1.5;
Theta = (0:0.4:90);

rp = ((n2/n1)*cos(2*(pi/360)*Theta)-sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2))./((n2/n1)*cos(2*(pi/360)*Theta)+sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));
rs = (cos(2*(pi/360)*Theta)-(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2))./(cos(2*(pi/360)*Theta)+(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));

% 2. Reflection: Intensities

Rp = rp.^2;
Rs = rs.^2;

figure(1);
subplot(2,2,1);
plot(Theta,rp.^2);
axis([0 100 0 1]);                  % PLOTS LIMITS                    
xlabel('\theta');
title('p - case');
legend('rp(\theta)^2');

subplot(2,2,2);
plot(Theta,rs.^2);
axis([0 100 0 1]);                  % PLOTS LIMITS                    
xlabel('\theta');
title('s - case');
legend('rs(\theta)^2');

% 3. Transmission: Intensities

Tp = 1 - Rp;
Ts = 1 - Rs;

subplot(2,2,3);
plot(Theta,Tp);
axis([0 100 0 1]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('Tp(\theta)');

subplot(2,2,4);
plot(Theta,Ts);
axis([0 100 0 1]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('Ts(\theta)');
`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'of',
    title: "of - M6FRINTN2S\r",
    description: "M6FRINTN2S\r",
    category: "Optics - Matrix Methods",
    chapter: '5',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# M6FRINTN2S

# Fresnel's formulas as function of angle of incidence for n1>n2
# for Rp = rp**2, Rs = rs**2, and Tp = 1- Rp, Ts = 1-Rs

# 1. Amplitude reflection coefficients.


n1 = 1.5
n2 = 1
Theta = np.arange(0, 90+0.01, 0.01)
rp = ((n2/n1)*np.cos(2*(np.pi/360)*Theta)-np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))/((n2/n1)*np.cos(2*(np.pi/360)*Theta)+np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))
rs = (np.cos(2*(np.pi/360)*Theta)-(n2/n1)*np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))/(np.cos(2*(np.pi/360)*Theta)+(n2/n1)*np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))
# 2. Reflection: Intensities

Rp = rp*conj(rp)
Rs = rs*conj(rs)
fig = plt.figure(1)

plt.subplot(2, 2, 1)

plt.plot(Theta,Rp)

plt.xlim(0, 100)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('\theta')
plt.title('p - case')
plt.legend(['Rp(\theta)'])
plt.subplot(2, 2, 2)

plt.plot(Theta,Rs)

plt.xlim(0, 100)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('\theta')
plt.title('s - case')
plt.legend(['Rs(\theta)'])
# 3. Transmission: Intensities

Tp = 1 - Rp
Ts = 1 - Rs
plt.subplot(2, 2, 3)

plt.plot(Theta,Tp)

plt.xlim(0, 100)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('\theta')
plt.title('p - case')
plt.legend(['Tp(\theta)'])
plt.subplot(2, 2, 4)

plt.plot(Theta,Ts)

plt.xlim(0, 100)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('\theta')
plt.title('s - case')
plt.legend(['Ts(\theta)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% M6FRINTN2S

% Fresnel's formulas as function of angle of incidence for n1>n2
% for Rp = rp^2, Rs = rs^2, and Tp = 1- Rp, Ts = 1-Rs

% 1. Amplitude reflection coefficients.

function M6FRINTN2S;

n1 = 1.5;
n2 = 1;
Theta = (0:0.01:90);

rp = ((n2/n1)*cos(2*(pi/360)*Theta)-sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2))./((n2/n1)*cos(2*(pi/360)*Theta)+sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));
rs = (cos(2*(pi/360)*Theta)-(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2))./(cos(2*(pi/360)*Theta)+(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));

% 2. Reflection: Intensities

Rp = rp.*conj(rp);
Rs = rs.*conj(rs);


figure(1);
subplot(2,2,1);
plot(Theta,Rp);
axis([0 100 0 1]);                  % PLOTS LIMITS                    
xlabel('\theta');
title('p - case');
legend('Rp(\theta)');

subplot(2,2,2);
plot(Theta,Rs);
axis([0 100 0 1]);                  % PLOTS LIMITS                    
xlabel('\theta');
title('s - case');
legend('Rs(\theta)');

% 3. Transmission: Intensities

Tp = 1 - Rp;
Ts = 1 - Rs;


subplot(2,2,3);
plot(Theta,Tp);
axis([0 100 0 1]);                  % PLOTS LIMITS                    
xlabel('\theta');
title('p - case');
legend('Tp(\theta)');

subplot(2,2,4);
plot(Theta,Ts);
axis([0 100 0 1]);                  % PLOTS LIMITS                    
xlabel('\theta');
title('s - case');
legend('Ts(\theta)');`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'M7FREVA',
    title: "M7FREVA - M7FREVA. Penetration into the less dense medium at total reflection.\r",
    description: "M7FREVA. Penetration into the less dense medium at total reflection.\r",
    category: "Optics - Matrix Methods",
    chapter: '5',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# M7FREVA. Penetration into the less dense medium at total reflection.

# Exponential factor for decrease of amplitude into the less
# dense medium with -Y for two different refractive indices:

# ?c is the critical angle

# Different refractive indices. The value "a" is used to "be off" the critical angle


# First we set
a = 2
n1 = 1.5
n2 = 1
Lamda = 0.0005
nn1 = 3.4
nn2 = 1
z = asin(n2/n1)
zz = asin(nn2/nn1)
Y = np.arange(-0.00005, -0.001+-0.00005, -0.00005)
Theta1c = z * 360/(2*np.pi)
Theta2c = zz * 360/(2*np.pi)

# Theta1c = 41.81
# Theta2c = 17.105
Theta1  = Theta1c + 2
Theta2 =  Theta2c + a
k2 = 2*(np.pi/Lamda) * n2
A = 1
kk2 = 2 * (np.pi/Lamda) * nn2
y1 = A*np.exp(Y*k2*np.sqrt((n1*np.sin((2*np.pi/360)*Theta1)/n2)**2 - 1))
y2 = A*np.exp(Y*kk2*np.sqrt((nn1*np.sin((2*np.pi/360)*Theta2)/nn2)**2 - 1))
fig = plt.figure(1)

plt.plot(Y,y1,Y,y2)

plt.xlim(-1e-3, 0)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('Y')
plt.legend(['y1(Y)', 'y2(Y)'])
# To study different angles, make refractive indices the same for both and change "a"
# to values larger than 2.
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% M7FREVA. Penetration into the less dense medium at total reflection.

% Exponential factor for decrease of amplitude into the less
% dense medium with -Y for two different refractive indices:

% ?c is the critical angle

% Different refractive indices. The value "a" is used to "be off" the critical angle

function M7FREVA;
% First we set
a = 2;
n1 = 1.5;
n2 = 1;
Lamda = 0.0005;
nn1 = 3.4;
nn2 = 1;
z = asin(n2/n1);  
zz = asin(nn2/nn1);

Y = (-0.00005:-0.00005:-0.001);

Theta1c = z * 360/(2*pi)
Theta2c = zz * 360/(2*pi)

% Theta1c = 41.81;
% Theta2c = 17.105;

Theta1  = Theta1c + 2;
Theta2 =  Theta2c + a;

k2 = 2*(pi/Lamda) * n2;
A = 1;
kk2 = 2 * (pi/Lamda) * nn2;

y1 = A*exp(Y*k2*sqrt((n1*sin((2*pi/360)*Theta1)/n2)^2 - 1));
y2 = A*exp(Y*kk2*sqrt((nn1*sin((2*pi/360)*Theta2)/nn2)^2 - 1));

figure(1);
plot(Y,y1,Y,y2);
axis([-1e-3 0 0 1]);                  % PLOTS LIMITS                    
xlabel('Y');
legend('y1(Y)','y2(Y)');

% To study different angles, make refractive indices the same for both and change "a"
% to values larger than 2.`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'M8POLIN',
    title: "M8POLIN - M8POLIN\r",
    description: "M8POLIN\r",
    category: "Optics - Matrix Methods",
    chapter: '5',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# M8POLIN
# Linearly polarized light.
# Graph of np.cos( 2?x/360) on x-axis and np.cos(2?x/360 + ?) on y-axis

x = np.arange(1, 360+1, 1)
# 1. Before enterting the birifringent plate X = 0
Phi1 = 0
y1 = np.cos(2*np.pi*(x/360))
z1 = np.cos(2*np.pi*(x/360) +  (2*np.pi*Phi1)/360)
fig = plt.figure(1)

plt.subplot(2, 2, 1)

plt.plot(x,y1,x,z1)

plt.xlim(0, 400)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('x')
plt.title('Each seperate')
plt.legend(['y1(x)', 'z1(x)'])
plt.subplot(2, 2, 2)

plt.plot(y1,z1)

plt.xlim(-1, 1)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('y1')
plt.title('One plotted against the other')
plt.legend(['z1(y1)'])
# 2. At the plane X = L
Phi2 = 180
y1 = np.cos(2*np.pi*(x/360))
z1 = np.cos(2*np.pi*(x/360) +  (2*np.pi*Phi2)/360)
plt.subplot(2, 2, 3)

plt.plot(x,y1,x,z1)

plt.xlim(0, 400)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('x')
plt.title('Each seperate')
plt.legend(['y1(x)', 'z1(x)'])
plt.subplot(2, 2, 4)

plt.plot(y1,z1)

plt.xlim(-1, 1)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('y1')
plt.title('One plotted against the other')
plt.legend(['z1(y1)'])
# The resulting vibration is along the diagonal
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% M8POLIN
% Linearly polarized light.
% Graph of cos( 2?x/360) on x-axis and cos(2?x/360 + ?) on y-axis
function M8POLIN;
x = (1:1:360);

% 1. Before enterting the birifringent plate X = 0;
Phi1 = 0;
y1 = cos(2*pi*(x/360));
z1 = cos(2*pi*(x/360) +  (2*pi*Phi1)/360);

figure(1);
subplot(2,2,1);
plot(x,y1,x,z1);
axis([0 400 -1 1]);                  % PLOTS LIMITS                    
xlabel('x');
title('Each seperate');
legend('y1(x)','z1(x)');

subplot(2,2,2);
plot(y1,z1);
axis([-1 1 -1 1]);                  % PLOTS LIMITS                    
xlabel('y1');
title('One plotted against the other');
legend('z1(y1)');

% 2. At the plane X = L
Phi2 = 180;
y1 = cos(2*pi*(x/360));
z1 = cos(2*pi*(x/360) +  (2*pi*Phi2)/360);

subplot(2,2,3);
plot(x,y1,x,z1);
axis([0 400 -1 1]);                  % PLOTS LIMITS                    
xlabel('x');
title('Each seperate');
legend('y1(x)','z1(x)');

subplot(2,2,4);
plot(y1,z1);
axis([-1 1 -1 1]);                  % PLOTS LIMITS                    
xlabel('y1');
title('One plotted against the other');
legend('z1(y1)');

% The resulting vibration is along the diagonal`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'M9POELIP',
    title: "M9POELIP - M9POELIP Circular and ellipticlly polarized light\r",
    description: "M9POELIP Circular and ellipticlly polarized light\r",
    category: "Optics - Matrix Methods",
    chapter: '5',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# M9POELIP Circular and ellipticlly polarized light

# To demonstrate of circular or elliptically polarized light turning "left or "right".
# Four graphs are shown, extending from 0 to 90, 0 to 160, 0 to 235,
# and 0 to 315 degrees.

# The angle ranges (x) correspond to chosen time ranges. Left and right
# polarized light is described by positive or negative ?=?/2 in one component:
# Positive ?: We have y = Ey = A np.cos(-x), yy = Ez = Acos(-x +?) = -Asin(-x),

# Negative ?: We have y = Ey = A np.cos(-x), yy = Ez = Acos(-x -?) = Asin(-x),
# We write for Ez = bAsin(x). When looking in direction of the incoming light,
# "b = -1" is for "left" polarized light (counter clock wise), "b= 1" for "right"
# polarized light (clock wise).


x1 = np.arange(1, 90+1, 1)
x2 = np.arange(1, 160+1, 1)
x3 = np.arange(1, 235+1, 1)
x4 = np.arange(1, 315+1, 1)
b = -1
y1 = np.cos(-2*np.pi*(x1/360))
y2 = np.cos(-2*np.pi*(x2/360))
y3 = np.cos(-2*np.pi*(x3/360))
y4 = np.cos(-2*np.pi*(x4/360))
yy1 = b*np.sin(-2*np.pi*(x1/360))
yy2 = b*np.sin(-2*np.pi*(x2/360))
yy3 = b*np.sin(-2*np.pi*(x3/360))
yy4 = b*np.sin(-2*np.pi*(x4/360))
fig = plt.figure(1)

plt.subplot(2, 2, 1)

plt.plot(y1,yy1)

plt.xlim(-1, 1)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('y1(x1)')
plt.legend(['yy1(x1)'])
plt.subplot(2, 2, 2)

plt.plot(y2,yy2)

plt.xlim(-1, 1)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('y2(x2)')
plt.legend(['yy2(x2)'])
plt.subplot(2, 2, 3)

plt.plot(y3,yy3)

plt.xlim(-1, 1)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('y3(x3)')
plt.legend(['yy3(x3)'])
plt.subplot(2, 2, 4)

plt.plot(y4,yy4)

plt.xlim(-1, 1)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('y4(x4)')
plt.legend(['yy4(x4)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% M9POELIP Circular and ellipticlly polarized light

% To demonstrate of circular or elliptically polarized light turning "left or "right".
% Four graphs are shown, extending from 0 to 90, 0 to 160, 0 to 235,
% and 0 to 315 degrees.

% The angle ranges (x) correspond to chosen time ranges. Left and right
% polarized light is described by positive or negative ?=?/2 in one component:
% Positive ?: We have y = Ey = A cos(-x), yy = Ez = Acos(-x +?) = -Asin(-x),

% Negative ?: We have y = Ey = A cos(-x), yy = Ez = Acos(-x -?) = Asin(-x),
% We write for Ez = bAsin(x). When looking in direction of the incoming light,
% "b = -1" is for "left" polarized light (counter clock wise), "b= 1" for "right"
% polarized light (clock wise).

function M9POELIP;
x1 = (1:1:90);
x2 = (1:1:160);
x3 = (1:1:235);
x4 = (1:1:315);
b = -1;

y1 = cos(-2*pi*(x1/360));
y2 = cos(-2*pi*(x2/360));
y3 = cos(-2*pi*(x3/360));
y4 = cos(-2*pi*(x4/360));

yy1 = b*sin(-2*pi*(x1/360));
yy2 = b*sin(-2*pi*(x2/360));
yy3 = b*sin(-2*pi*(x3/360));
yy4 = b*sin(-2*pi*(x4/360));

figure(1);
subplot(2,2,1);
plot(y1,yy1);
axis([-1 1 -1 1]);                  % PLOTS LIMITS                    
xlabel('y1(x1)');
legend('yy1(x1)');

subplot(2,2,2);
plot(y2,yy2);
axis([-1 1 -1 1]);                  % PLOTS LIMITS                    
xlabel('y2(x2)');
legend('yy2(x2)');

subplot(2,2,3);
plot(y3,yy3);
axis([-1 1 -1 1]);                  % PLOTS LIMITS                    
xlabel('y3(x3)');
legend('yy3(x3)');


subplot(2,2,4);
plot(y4,yy4);
axis([-1 1 -1 1]);                  % PLOTS LIMITS                    
xlabel('y4(x4)');
legend('yy4(x4)');
`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'of',
    title: "of - MA3DIFINTRO\r",
    description: "MA3DIFINTRO\r",
    category: "Optics - Matrix Methods",
    chapter: '5',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# MA3DIFINTRO

# Fresnel's formulas as function of angle of incidence for n2<n1
# Graph of arg(zr) - arg(zrr).

# Complex zr for parallel and zrr for perpendicular case.

Theta = np.arange(0, 90+1, 1)
n2 = 1
n1 = 1.9
rp = ((n2/n1)*np.cos(2*(np.pi/360)*Theta)-np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))/((n2/n1)*np.cos(2*(np.pi/360)*Theta)+np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))
rs = (np.cos(2*(np.pi/360)*Theta)-(n2/n1)*np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))/(np.cos(2*(np.pi/360)*Theta)+(n2/n1)*np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))
fig = plt.figure(1)

plt.plot(Theta,angle(rp)
-angle(rs))
plt.xlim(0, 100)
plt.ylim(-3.5, 3.5)
;                  # PLOTS LIMITS                    
plt.xlabel('\theta')
plt.legend(['angle(rp(\theta))-angle(rs(\theta))'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% MA3DIFINTRO

% Fresnel's formulas as function of angle of incidence for n2<n1
% Graph of arg(zr) - arg(zrr).

% Complex zr for parallel and zrr for perpendicular case.
function MA3DIFINTRO;
Theta = (0:1:90);
n2 = 1;
n1 = 1.9;

rp = ((n2/n1)*cos(2*(pi/360)*Theta)-sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2))./((n2/n1)*cos(2*(pi/360)*Theta)+sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));
rs = (cos(2*(pi/360)*Theta)-(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2))./(cos(2*(pi/360)*Theta)+(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));


figure(1);
plot(Theta,angle(rp)-angle(rs));
axis([0 100 -3.5 3.5]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('angle(rp(\theta))-angle(rs(\theta))');`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'N1RECBOX',
    title: "N1RECBOX - N1RECBOX\r",
    description: "N1RECBOX\r",
    category: "Optics - Other",
    chapter: '6',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64
from mpl_toolkits.mplot3d import Axes3D

# N1RECBOX
# Modes of the rectangular box in two dimensions 
# Standing sine waves in x and y direction. Mode number and constants.
# x direction n1 and a
# y direction n2 and b
# The wave in each direction is shown and Contour and surface plots.
# The square is also shown as surface plot.

N = 20
a = 40
b = 40
n1 = 2
n2 = 2
Lamda1 = 2 * a /n1
Lamda2 = 2 * b /n2
i =(0:1:N)
j =(0:1:N)
x = (-40) + 2.001*i
y = (-40) + 2.0001*j
y1 = np.sin(2*np.pi*x/Lamda1)
y2 = np.sin(2*np.pi*y/Lamda2)
# 1. One Dimension
fig = plt.figure(1)

plt.subplot(1, 2, 1)

plt.plot(x,y1)

plt.xlim(-40, 20)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('Xi')
plt.legend(['y1(x)'])
plt.subplot(1, 2, 2)

plt.plot(y,y2)

plt.xlim(-40, 20)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('Yj')
plt.legend(['y2(y)'])
# 2. Amplitude, 2D
nx = length(x)
ny = length(y)
Z = zeros(nx,ny)
for r=1:nx
        for c=1:ny
            M11(r,c)= y1(r)*y2(c)
            MM11(r,c)= (y1(r)*y2(c))**2
fig = plt.figure(2)

plt.subplot(2, 2, 1)

plt.contour(M11)
plt.xlim(0, 20)
plt.ylim(0, 20)

plt.subplot(2, 2, 2)

ax = plt.gca()
if not hasattr(ax, 'plot_surface'):
    fig = plt.figure()
    ax = fig.add_subplot(111, projection='3d')
    X, Y = np.meshgrid(np.arange(M11.shape[1]), np.arange(M11.shape[0]))
    ax.plot_surface(X, Y, M11, cmap='viridis')
axis([0 20 0 20 -1 1])

# 3. Intensity, 2D

plt.subplot(2, 2, 3)

plt.contour(MM11)
plt.xlim(0, 20)
plt.ylim(0, 20)

plt.subplot(2, 2, 4)

ax = plt.gca()
if not hasattr(ax, 'plot_surface'):
    fig = plt.figure()
    ax = fig.add_subplot(111, projection='3d')
    X, Y = np.meshgrid(np.arange(MM11.shape[1]), np.arange(MM11.shape[0]))
    ax.plot_surface(X, Y, MM11, cmap='viridis')
axis([0 20 0 20 0 1])

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% N1RECBOX
% Modes of the rectangular box in two dimensions 
% Standing sine waves in x and y direction. Mode number and constants.
% x direction n1 and a
% y direction n2 and b
% The wave in each direction is shown and Contour and surface plots.
% The square is also shown as surface plot.
function N1RECBOX;
N = 20;
a = 40;
b = 40;
n1 = 2;
n2 = 2;

Lamda1 = 2 * a /n1;
Lamda2 = 2 * b /n2;

i =(0:1:N); 
j =(0:1:N);

x = (-40) + 2.001*i;
y = (-40) + 2.0001*j;

y1 = sin(2*pi*x/Lamda1);
y2 = sin(2*pi*y/Lamda2);

% 1. One Dimension
figure(1);
subplot(1,2,1);
plot(x,y1);
axis([-40 20 -1 1]);                  % PLOTS LIMITS                    
xlabel('Xi');
legend('y1(x)');

subplot(1,2,2);
plot(y,y2);
axis([-40 20 -1 1]);                  % PLOTS LIMITS                    
xlabel('Yj');
legend('y2(y)');

% 2. Amplitude, 2D
nx = length(x);
ny = length(y);
Z = zeros(nx,ny);
for r=1:nx;
        for c=1:ny;
            M11(r,c)= y1(r)*y2(c);
            MM11(r,c)= (y1(r)*y2(c))^2;
        end;
end;

figure(2);
subplot(2,2,1);
              
contour(M11);
axis([0 20 0 20]);  



subplot(2,2,2);
mesh(M11);
axis([0 20 0 20 -1 1])

% 3. Intensity, 2D

subplot(2,2,3);              
contour(MM11);
axis([0 20 0 20]);  

subplot(2,2,4);
mesh(MM11);
axis([0 20 0 20 0 1])
`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'N4SYMULANTb',
    title: "N4SYMULANTb - N4SYMULANTb Page 2 \r",
    description: "N4SYMULANTb Page 2 \r",
    category: "Optics - Other",
    chapter: '6',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# N4SYMULANTb Page 2 
# Numerical calculation

n1 = 1
n2 = 1.5
n3 = 2
# i = np.sqrt(-1)
# for a single interface, that is
M11= 1
M12 = 0
M21 = 0
M22 = 1
tt = (-2*n1*(M21*M12-M22*M11)/(M21 + M22*n1 + n3*M11 + n3*M12*n1))* conj(-2*n1*(M21*M12-M22*M11)/(M21 + M22*n1 + n3*M11 + n3*M12*n1))
# tt = 0.444
R = ((-(-n3*M12*n1-M22*n1+M21+n3*M11))/(M21+M22*n1+n3*M11+n3*M12*n1))**2
# R = 0.111
# One sees that R+TT is not 1 and tt is not the transmitted power
# However if n3*tt is the transmitted power T, one has:
T = n3*tt
# T=0.889
# T+R = 1
# and if n1 is not 1 we have more generally to write:
T = (n3/n1)*tt
# For antireflection coating one has eq. 6.27
nn1 = 1
nn2 = np.arange(1.1, 2+0.01, 0.01)
nn3 = 1.5
MM12 = (-i)/nn2
MM21 = (-i)*nn2
r = ((-(-n3*MM12*n1+MM21))/(MM21+n3*MM12*n1))
# since -i cancels out we have
MM12 = 1/nn2
MM21 = nn2
R = ((-(-nn3*MM12*nn1+MM21))/(MM21+nn3*MM12*nn1))**2
fig = plt.figure(1)

plt.plot(nn2,R)

plt.xlim(1, 1.5)
plt.ylim(0, 0.1)
;                  # PLOTS LIMITS                    
plt.xlabel('nn2')
plt.legend(['R(nn2)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% N4SYMULANTb Page 2 
% Numerical calculation
function N4SYMULANTb;
n1 = 1;
n2 = 1.5;
n3 = 2;
% i = sqrt(-1);
% for a single interface, that is
M11= 1;
M12 = 0;
M21 = 0;
M22 = 1;

tt = (-2*n1*(M21*M12-M22*M11)/(M21 + M22*n1 + n3*M11 + n3*M12*n1))* conj(-2*n1*(M21*M12-M22*M11)/(M21 + M22*n1 + n3*M11 + n3*M12*n1))
% tt = 0.444;

R = ((-(-n3*M12*n1-M22*n1+M21+n3*M11))/(M21+M22*n1+n3*M11+n3*M12*n1))^2;
% R = 0.111;

% One sees that R+TT is not 1 and tt is not the transmitted power
% However if n3*tt is the transmitted power T, one has
T = n3*tt;
% T=0.889
% T+R = 1;
% and if n1 is not 1 we have more generally to write
T = (n3/n1)*tt;
% For antireflection coating one has eq. 6.27
nn1 = 1;
nn2 = (1.1:0.01:2);
nn3 = 1.5;
MM12 = (-i)./nn2;
MM21 = (-i).*nn2;

r = ((-(-n3*MM12*n1+MM21))/(MM21+n3*MM12*n1));




% since -i cancels out we have
MM12 = 1./nn2;
MM21 = nn2;

R = ((-(-nn3*MM12*nn1+MM21))./(MM21+nn3*MM12*nn1)).^2;
figure(1);
plot(nn2,R);
axis([1 1.5 0 0.1]);                  % PLOTS LIMITS                    
xlabel('nn2');
legend('R(nn2)');
`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'N6PLSPS',
    title: "N6PLSPS - N6PLSPS\r",
    description: "N6PLSPS\r",
    category: "Optics - Other",
    chapter: '6',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# N6PLSPS
# Wave traveling with total internal reflection through a planar waveguide.
# Resonance condition of s-polarization.
# Global definition of n1, n2, n3, d and ? above the graph


n1 = 1.5
n2 = 1
n3 = 1
d = 18
Lamda = 2
Theta = np.arange(0, 90+1, 1)
y = 2*np.pi*n1*(d/Lamda)*np.cos(2*np.pi*Theta/360)
zs1 = (np.sqrt((n1**2)*(np.sin(2*np.pi*Theta/360))**2-n2**2))/(n1*np.cos(2*np.pi*Theta/360))
ys1 = -atan(zs1)
zs3 = (np.sqrt((n1**2)*(np.sin(2*np.pi*Theta/360))**2-n3**2))/(n1*np.cos(2*np.pi*Theta/360))
ys3 = -atan(zs3)
# ys is for m=1, yys for m=2, yyys for m=3
# For these parameters the angle
# Theta of the first three possible modes is determined

ys = -ys1 -ys3 + np.pi
yys = -ys1 -ys3 + np.pi*2
yyys = -ys1 -ys3 + np.pi*3
# Global Definition
Thetac = asin(n2/n1)
ThetaThetac = 360*Thetac/(2*np.pi)
# ThetaThetac = 41.81

fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(Theta,y,Theta,ys,Theta,yys,Theta,yyys)

plt.xlim(0, 90)
plt.ylim(0, 15)
;                  # PLOTS LIMITS                    
plt.xlabel('\theta')
plt.legend(['y(\theta)', 'ys(\theta)', 'yys(\theta)', 'yyys(\theta)'])
# At the cross-over point of y with ys, yys, or yyys respectively, the resonance condition is
# fulfilled.
# The functions ys, yys and yyys are complex in the region from horizontal appearance to
# zero. This is shown in the next graph where the argument is plotted. The complex region
# has to be disregarded for the determination of the cross-over point.

plt.subplot(2, 1, 2)

plt.plot(Theta,angle(ys)
,Theta,angle(yys),Theta,angle(yyys))
plt.xlim(0, 100)
plt.ylim(0, 0.6)
;                  # PLOTS LIMITS                    
plt.xlabel('\theta')
plt.legend(['angle(ys(\theta))', 'angle(yys(\theta))', 'angle(yyys(\theta))'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% N6PLSPS
% Wave traveling with total internal reflection through a planar waveguide.
% Resonance condition of s-polarization.
% Global definition of n1, n2, n3, d and ? above the graph

function N6PLSPS;
n1 = 1.5;
n2 = 1;
n3 = 1;
d = 18;
Lamda = 2;
Theta = (0:1:90);
y = 2*pi*n1*(d/Lamda)*cos(2*pi*Theta/360);
zs1 = (sqrt((n1^2)*(sin(2*pi*Theta/360)).^2-n2^2))./(n1*cos(2*pi*Theta/360));
ys1 = -atan(zs1);
zs3 = (sqrt((n1^2)*(sin(2*pi*Theta/360)).^2-n3^2))./(n1*cos(2*pi*Theta/360));
ys3 = -atan(zs3);

% ys is for m=1, yys for m=2, yyys for m=3
% For these parameters the angle
% Theta of the first three possible modes is determined

ys = -ys1 -ys3 + pi;
yys = -ys1 -ys3 + pi*2;
yyys = -ys1 -ys3 + pi*3;

%Global Definition
Thetac = asin(n2/n1);
ThetaThetac = 360*Thetac/(2*pi)
% ThetaThetac = 41.81

figure(1);
subplot(2,1,1);
plot(Theta,y,Theta,ys,Theta,yys,Theta,yyys);
axis([0 90 0 15]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('y(\theta)','ys(\theta)','yys(\theta)','yyys(\theta)');


% At the cross-over point of y with ys, yys, or yyys respectively, the resonance condition is
% fulfilled.
% The functions ys, yys and yyys are complex in the region from horizontal appearance to
% zero. This is shown in the next graph where the argument is plotted. The complex region
% has to be disregarded for the determination of the cross-over point.

subplot(2,1,2);
plot(Theta,angle(ys),Theta,angle(yys),Theta,angle(yyys));
axis([0 100 0 0.6]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('angle(ys(\theta))','angle(yys(\theta))','angle(yyys(\theta))');`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'N7PLPPS',
    title: "N7PLPPS - N7PLPPS\r",
    description: "N7PLPPS\r",
    category: "Optics - Other",
    chapter: '6',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# N7PLPPS
# Wave traveling with total internal reflection through a planar waveguide.
# Resonance condition for p-polarization.
# global definition of n1,n2,n3, d and ? above the graph

n1 = 1.5
n2 = 1
n3 = 1
d = 6
Lamda = 4.3
LamdaLamda = Lamda/n1
# LamdaLamda = 2.867

Theta = np.arange(0, 90+1, 1)
y = 2*np.pi*n1*(d/Lamda)*np.cos(2*np.pi*Theta/360)
zp1 = (np.sqrt((n1**2)*(np.sin(2*np.pi*Theta/360))**2-n2**2)*n1)/((n2**2)*np.cos(2*np.pi*Theta/360))
yp1 = -atan(zp1)
zp3 = (np.sqrt((n1**2)*(np.sin(2*np.pi*Theta/360))**2-n3**2)*n1)/((n3**2)*np.cos(2*np.pi*Theta/360))
yp3 = -atan(zp3)
# For the graph we use yp for m=1, yyp for m=2, yyyp for m=3

yp = -yp1 -yp3 + np.pi
yyp = -yp1 -yp3 + np.pi*2
yyyp = -yp1 -yp3 + np.pi*3
# Global Definition
Thetac = asin(n2/n1)
ThetaThetac = 360*Thetac/(2*np.pi)
# ThetaThetac = 41.81

fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(Theta,y,Theta,yp,Theta,yyp,Theta,yyyp)

plt.xlim(0, 90)
plt.ylim(0, 15)
;                  # PLOTS LIMITS                    
plt.xlabel('\theta')
plt.legend(['y(\theta)', 'yp(\theta)', 'yyp(\theta)', 'yyyp(\theta)'])
# At the cross-over point of y with yp, yyp, or yyyp respectively, the resonance condition is
# fulfilled.
# The functions yp, yyp and yyyp are complex in the region from horizontal appearance to
# zero. This is shown in the next graph where the argument is plotted. The complex region
# has to be disregarded for the determination of the cross-over point.

plt.subplot(2, 1, 2)

plt.plot(Theta,angle(yp)
,Theta,angle(yyp),Theta,angle(yyyp))
plt.xlim(0, 100)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('\theta')
plt.legend(['angle(yp(\theta))', 'angle(yyp(\theta))', 'angle(yyyp(\theta))'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% N7PLPPS
% Wave traveling with total internal reflection through a planar waveguide.
% Resonance condition for p-polarization.
% global definition of n1,n2,n3, d and ? above the graph
function N7PLPPS;

n1 = 1.5;
n2 = 1;
n3 = 1;
d = 6;
Lamda = 4.3;
LamdaLamda = Lamda/n1
% LamdaLamda = 2.867

Theta = (0:1:90);
y = 2*pi*n1*(d/Lamda)*cos(2*pi*Theta/360);
zp1 = (sqrt((n1^2)*(sin(2*pi*Theta/360)).^2-n2^2)*n1)./((n2^2)*cos(2*pi*Theta/360));
yp1 = -atan(zp1);
zp3 = (sqrt((n1^2)*(sin(2*pi*Theta/360)).^2-n3^2)*n1)./((n3^2)*cos(2*pi*Theta/360));
yp3 = -atan(zp3);

% For the graph we use yp for m=1, yyp for m=2, yyyp for m=3

yp = -yp1 -yp3 + pi;
yyp = -yp1 -yp3 + pi*2;
yyyp = -yp1 -yp3 + pi*3;

%Global Definition
Thetac = asin(n2/n1);
ThetaThetac = 360*Thetac/(2*pi)
% ThetaThetac = 41.81

figure(1);
subplot(2,1,1);
plot(Theta,y,Theta,yp,Theta,yyp,Theta,yyyp);
axis([0 90 0 15]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('y(\theta)','yp(\theta)','yyp(\theta)','yyyp(\theta)');

% At the cross-over point of y with yp, yyp, or yyyp respectively, the resonance condition is
% fulfilled.
% The functions yp, yyp and yyyp are complex in the region from horizontal appearance to
% zero. This is shown in the next graph where the argument is plotted. The complex region
% has to be disregarded for the determination of the cross-over point.

subplot(2,1,2);
plot(Theta,angle(yp),Theta,angle(yyp),Theta,angle(yyyp));
axis([0 100 0 1]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('angle(yp(\theta))','angle(yyp(\theta))','angle(yyyp(\theta))');

`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'N8CWGK',
    title: "N8CWGK - N8CWGK\r",
    description: "N8CWGK\r",
    category: "Optics - Other",
    chapter: '6',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# N8CWGK
# Dielectric circular waveguide, determination of k
# 1. Check for positive values of argument for J0, J1 and K0, K1

# Input Data: radius, wavelength and refractive
# indices
a = 3
Lamda = 2.39
n1 = 1.5
no =1
# We try the interval 
k = np.arange(2.65, 3.8+0.01, 0.01)
# Since x = (?a)**2 and y= (?a)**2
# We have for the square of the arguments of the Bessel functions
xx = (a**2)*(((n1**2)*4*np.pi**2)/(Lamda**2)-k**2)
yy = (a**2)*(k**2-((no**2)*4*np.pi**2)/(Lamda**2))
x = np.sqrt(xx)
y = np.sqrt(yy)
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(k,x,k,y)

plt.xlim(2.6, 3.8)
plt.ylim(0, 20)
;                  # PLOTS LIMITS                    
plt.xlabel('k')
plt.legend(['x(k)', 'y(k)'])
plt.subplot(2, 1, 2)

plt.plot(k,-besselj(1,x)
/(x*besselj(0,x)),k,besselk(1,y)/(y*besselk(0,y)))
plt.xlim(2.6, 3.8)
plt.ylim(-40, 10)
;                  # PLOTS LIMITS                    
plt.xlabel('k')
plt.legend(['-besselj(1,x)/(x*besselj(0,x))', 'besselk(1,y)/(y*besselk(0,y))'])
# From graph: First intersection
kk = 2.66
LamdaLamda = (2*np.pi)/kk
# LamdaLamda = 2.362
# Side calculation. If
LamdaLamdaLamda = 8
# we get
kkk = 2*np.pi/LamdaLamdaLamda
# and kkk = 0.785

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% N8CWGK
% Dielectric circular waveguide, determination of k
% 1. Check for positive values of argument for J0, J1 and K0, K1
function N8CWGK;
%Input Data: radius, wavelength and refractive
% indices
a = 3;
Lamda = 2.39;
n1 = 1.5;
no =1;


% We try the interval 
k = (2.65:0.01:3.8);


% Since x = (?a)^2 and y= (?a)^2
% We have for the square of the arguments of the Bessel functions
xx = (a^2)*(((n1^2)*4*pi^2)/(Lamda^2)-k.^2);
yy = (a^2)*(k.^2-((no^2)*4*pi^2)/(Lamda^2));

x = sqrt(xx);
y = sqrt(yy);

figure(1);
subplot(2,1,1);
plot(k,x,k,y);
axis([2.6 3.8 0 20]);                  % PLOTS LIMITS                    
xlabel('k');
legend('x(k)','y(k)');

subplot(2,1,2);
plot(k,-besselj(1,x)./(x.*besselj(0,x)),k,besselk(1,y)./(y.*besselk(0,y)));
axis([2.6 3.8 -40 10]);                  % PLOTS LIMITS                    
xlabel('k');
legend('-besselj(1,x)/(x*besselj(0,x))','besselk(1,y)/(y*besselk(0,y))');


% From graph: First intersection
kk = 2.66;
LamdaLamda = (2*pi)/kk
% LamdaLamda = 2.362;

% Side calculation. If
LamdaLamdaLamda = 8;
% we get
kkk = 2*pi/LamdaLamdaLamda
% and kkk = 0.785
`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'L10WRS',
    title: "L10WRS - L10WRS Radius of curvature and Beam waist.\r",
    description: "L10WRS Radius of curvature and Beam waist.\r",
    category: "Optics - Light Sources",
    chapter: '7',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# L10WRS Radius of curvature and Beam waist.
# 1. Radius of curvature
# Beam waist normalized to 1 , that is we plot (w(z) =w0 SQR( 1 + (z/zR)**2) and set
# w0 =.1, in cm. and zR = ?(?0)2 /? ? .01?/?, ? in cm.
# Radius of curvature R(z) = z + (zR)**2/z


zR = 100
z = np.arange(-100, 100+0.01, 0.01)
R = np.abs(z+((zR)**2)/z)
Rm = 2*zR
# At z = 1/2 of distance of mirrors, that is
# for for distance 200 at 100,
# the radius of curvature must be
# equal to the distance of the mirrors.

fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(z,R)

plt.xlim(-100, 100)
plt.ylim(0, 1000)
;                  # PLOTS LIMITS                    
plt.xlabel('z')
plt.legend(['R(z)'])
# 2. Beam waist
# Plots of two branches of the beam waist and the Asymptote to w(z), that is y = z/zR
# If z is in cm, we have set for w0=.1, ?=3.14*.01/zR in cm ( about 3 microns for zR =100)

y = (z*0.1)/zR; # and for the asymptote
yy = -y
w = 0.1*np.sqrt(1+(z/zR)**2); # and for the asymptote
ww = -0.1*np.sqrt(1+(z/zR)**2)
plt.subplot(2, 1, 2)

plt.plot(z,w,z,ww,z,y,z,yy)

plt.xlim(-100, 100)
plt.ylim(-0.2, 0.3)
;                  # PLOTS LIMITS                    
plt.xlabel('z')
plt.legend(['w(z)', 'ww(z)', 'y(z)', 'yy(z)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% L10WRS Radius of curvature and Beam waist.
% 1. Radius of curvature
% Beam waist normalized to 1 , that is we plot (w(z) =w0 SQR( 1 + (z/zR)^2) and set
% w0 =.1, in cm. and zR = ?(?0)2 /? ? .01?/?, ? in cm.
% Radius of curvature R(z) = z + (zR)^2/z

function L10WRS;

zR = 100;
z = (-100:0.01:100);
R = abs(z+((zR)^2)./z);
Rm = 2*zR;

% At z = 1/2 of distance of mirrors, that is
% for for distance 200 at 100,
% the radius of curvature must be
% equal to the distance of the mirrors.

figure(1);
subplot(2,1,1);
plot(z,R);
axis([-100 100 0 1000]);                  % PLOTS LIMITS                    
xlabel('z');
legend('R(z)');

% 2. Beam waist
% Plots of two branches of the beam waist and the Asymptote to w(z), that is y = z/zR
% If z is in cm, we have set for w0=.1, ?=3.14*.01/zR in cm ( about 3 microns for zR =100)

y = (z*0.1)/zR; % and for the asymptote
yy = -y;

w = 0.1*sqrt(1+(z/zR).^2); % and for the asymptote
ww = -0.1*sqrt(1+(z/zR).^2);

subplot(2,1,2);
plot(z,w,z,ww,z,y,z,yy);
axis([-100 100 -0.2 0.3]);                  % PLOTS LIMITS                    
xlabel('z');
legend('w(z)','ww(z)','y(z)','yy(z)');
`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'L11MOCONFCS',
    title: "L11MOCONFCS - L11MOCONFCS\r",
    description: "L11MOCONFCS\r",
    category: "Optics - Light Sources",
    chapter: '7',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# L11MOCONFCS

# Cartesian Coordinates for rectangular mirrors in confocal resonator.
# Field distribution as contour plot..

# The mode numbers m and n are for Hermitian Polynomials.
# The constant in the exponential is simulated by X.
# Small X correspond to small "waist width".


N = 40
X = 100
Y = 100
i = (0:1:N)
j = (0:1:N)
xi = (-20) + 1.00*i
yj = (-20) + 1.00*j
nx = length(i)
ny = length(j)
for r=1:nx
       for k=1:ny
            x = xi(r)
            y = yj(k)
            M00(r,k)  =(g(x,y)*H00(x,y))**2
            M01(r,k)  =(g(x,y)*H01(x,y))**2
            M02(r,k)  =(g(x,y)*H02(x,y))**2
            M10(r,k)  =(g(x,y)*H10(x,y))**2
            M11(r,k)  =(g(x,y)*H11(x,y))**2
            M12(r,k)  =(g(x,y)*H12(x,y))**2
            M20(r,k)  =(g(x,y)*H20(x,y))**2
            M21(r,k)  =(g(x,y)*H21(x,y))**2
            M22(r,k)  =(g(x,y)*H22(x,y))**2
fig = plt.figure(1)

plt.subplot(2, 2, 1)

plt.contour(M00)
plt.xlim(0, 40)
plt.ylim(0, 40)

plt.legend(['M00'])

plt.subplot(2, 2, 2)

plt.contour(M10)
plt.xlim(0, 40)
plt.ylim(0, 40)

plt.legend(['M10'])


plt.subplot(2, 2, 3)

plt.contour(M01)
plt.xlim(0, 40)
plt.ylim(0, 40)

plt.legend(['M01'])

plt.subplot(2, 2, 4)

plt.contour(M11)
plt.xlim(0, 40)
plt.ylim(0, 40)

plt.legend(['M11'])

fig = plt.figure(2)

plt.subplot(3, 2, 1)

plt.contour(M20)
plt.xlim(0, 40)
plt.ylim(0, 40)

plt.legend(['M20'])


plt.subplot(3, 2, 2)

plt.contour(M21)
plt.xlim(0, 40)
plt.ylim(0, 40)

plt.legend(['M21'])

plt.subplot(3, 2, 3)

plt.contour(M02)
plt.xlim(0, 40)
plt.ylim(0, 40)

plt.legend(['M02'])

plt.subplot(3, 2, 4)

plt.contour(M12)
plt.xlim(0, 40)
plt.ylim(0, 40)

plt.legend(['M12'])

plt.subplot(3, 1, 3)

plt.contour(M22)
plt.xlim(0, 40)
plt.ylim(0, 40)

plt.legend(['M22'])



Out = x**2+y**2
Out = np.exp(-R(x,y)/X)
Out = 1
Out = 1
Out = x*np.sqrt(2/X)
Out = y*np.sqrt(2/Y)
Out = 4*((np.sqrt(2/Y)*y)**2)-2
Out =  4*((np.sqrt(2/X)*x)**2)-2
Out = H0x(x)*H0y(y)
Out = H0x(x)*H1y(y)
Out = H0x(x)*H2y(y)
Out = H1x(x)*H0y(y)
Out = H1x(x)*H1y(y)
Out = H1x(x)*H2y(y)
Out = H2x(x)*H0y(y)
Out = H2x(x)*H1y(y)
Out = H2x(x)*H2y(y)
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% L11MOCONFCS

% Cartesian Coordinates for rectangular mirrors in confocal resonator.
% Field distribution as contour plot..

% The mode numbers m and n are for Hermitian Polynomials.
% The constant in the exponential is simulated by X.
% Small X correspond to small "waist width".

function L11MOCONFCS;
global X Y;
N = 40;
X = 100;
Y = 100;
i = (0:1:N);
j = (0:1:N);

xi = (-20) + 1.00*i;
yj = (-20) + 1.00*j;
nx = length(i);
ny = length(j); 
for r=1:nx;
       for k=1:ny;
            x = xi(r);
            y = yj(k);
            M00(r,k)  =(g(x,y).*H00(x,y)).^2;
            M01(r,k)  =(g(x,y).*H01(x,y)).^2;
            M02(r,k)  =(g(x,y).*H02(x,y)).^2;
            M10(r,k)  =(g(x,y).*H10(x,y)).^2;
            M11(r,k)  =(g(x,y).*H11(x,y)).^2;
            M12(r,k)  =(g(x,y).*H12(x,y)).^2;
            M20(r,k)  =(g(x,y).*H20(x,y)).^2;
            M21(r,k)  =(g(x,y).*H21(x,y)).^2;
            M22(r,k)  =(g(x,y).*H22(x,y)).^2;
       end;
end;



figure(1);
subplot(2,2,1);
contour(M00);
axis([0 40 0 40]);  
legend('M00');

subplot(2,2,2);
contour(M10);
axis([0 40 0 40]);  
legend('M10');


subplot(2,2,3);    
contour(M01);
axis([0 40 0 40]);  
legend('M01');

subplot(2,2,4);      
contour(M11);
axis([0 40 0 40]);  
legend('M11');

figure(2);         
subplot(3,2,1);
contour(M20);
axis([0 40 0 40]);  
legend('M20');


subplot(3,2,2);
contour(M21);
axis([0 40 0 40]);  
legend('M21');

subplot(3,2,3);      
contour(M02);
axis([0 40 0 40]);  
legend('M02');

subplot(3,2,4);      
contour(M12);
axis([0 40 0 40]);  
legend('M12');

subplot(3,1,3);      
contour(M22);
axis([0 40 0 40]);  
legend('M22');


function Out=R(x,y)
Out = x.^2+y.^2;

function Out=g(x,y)
global X;
Out = exp(-R(x,y)./X);

function Out=H0x(x)
Out = 1;
function Out=H0y(y)
Out = 1;

function Out=H1x(x)
global Y;
Out = x.*sqrt(2/X);

function Out=H1y(y)
global Y;
Out = y.*sqrt(2/Y);

function Out=H2y(y)
global Y;
Out = 4*((sqrt(2/Y).*y).^2)-2;

function Out=H2x(x)
Out =  4*((sqrt(2/X).*x).^2)-2;

function Out=H00(x,y)
Out = H0x(x).*H0y(y);

function Out=H01(x,y)
Out = H0x(x).*H1y(y);

function Out=H02(x,y)
Out = H0x(x).*H2y(y);

function Out=H10(x,y)
Out = H1x(x).*H0y(y);

function Out=H11(x,y)
Out = H1x(x).*H1y(y);

function Out=H12(x,y)
Out = H1x(x).*H2y(y);

function Out=H20(x,y)
Out = H2x(x).*H0y(y);

function Out=H21(x,y)
Out = H2x(x).*H1y(y);

function Out=H22(x,y)
Out = H2x(x).*H2y(y);
`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'L12MOCY1to4S',
    title: "L12MOCY1to4S - L12MOCY1to4S\r",
    description: "L12MOCY1to4S\r",
    category: "Optics - Light Sources",
    chapter: '7',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# L12MOCY1to4S
# Cylindircal Coordinates for circular mirrors in confocal resonator.
# Field distribution as contour plot for graph 00, 10, 01, and 11.
# The L(l,p) functions are written out for 00 to 22. The constant in the exponential is
# X


X = 3
N = 30
i = (0:1:N)
j = (0:1:N)
xi = -3 + 0.20001*i
yj = -3 + 0.20001*j
nx = length(i)
ny = length(j)
for r=1:nx
       for k=1:ny
            x = xi(r)
            y = yj(k)
            M00(r,k)  =(np.cos(0*Beta(x,y))*q(x,y)*L00(x,y))**2
            M10(r,k)  =(np.cos(0*Beta(x,y))*q(x,y)*L01(x,y))**2
            M01(r,k)  =(np.cos(1*Beta(x,y))*q(x,y)*L10(x,y))**2
            M11(r,k)  =(np.cos(1*Beta(x,y))*q(x,y)*L11(x,y))**2
fig = plt.figure(1)

plt.subplot(2, 2, 1)

Mesh(M00)
axis([0 30 0 30 0 1])
plt.legend(['M00'])

plt.subplot(2, 2, 2)

Mesh(M10)
axis([0 30 0 30 0 1.5])
plt.legend(['M10'])

plt.subplot(2, 2, 3)

Mesh(M01)
axis([0 30 0 30 0 1])
plt.legend(['M01'])

plt.subplot(2, 2, 4)

Mesh(M11)
axis([0 30 0 30 0 3.5])
plt.legend(['M11'])


Out = x**2+y**2
Out = atan(x/y)
Out = np.exp(-R(x,y)/X)
Out = 4*R(x,y)/X
Out = np.cos(0*Beta(x,y))
Out = 1
Out = 1-u(x,y)
Out = 1
Out = 2-u(x,y)
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% L12MOCY1to4S
% Cylindircal Coordinates for circular mirrors in confocal resonator.
% Field distribution as contour plot for graph 00, 10, 01, and 11.
% The L(l,p) functions are written out for 00 to 22. The constant in the exponential is
% X

function L12MOCY1to4S;
global X;
X = 3;
N = 30;
i = (0:1:N);
j = (0:1:N);
xi = -3 + 0.20001*i;
yj = -3 + 0.20001*j;

nx = length(i);
ny = length(j); 
for r=1:nx;
       for k=1:ny;
            x = xi(r);
            y = yj(k);
            M00(r,k)  =(cos(0*Beta(x,y))*q(x,y)*L00(x,y)).^2;
            M10(r,k)  =(cos(0*Beta(x,y))*q(x,y)*L01(x,y)).^2;
            M01(r,k)  =(cos(1*Beta(x,y))*q(x,y)*L10(x,y)).^2;
            M11(r,k)  =(cos(1*Beta(x,y))*q(x,y)*L11(x,y)).^2;
       end;
end;

figure(1);         
subplot(2,2,1);
Mesh(M00);
axis([0 30 0 30 0 1]); 
legend('M00');

subplot(2,2,2);    
Mesh(M10);
axis([0 30 0 30 0 1.5]); 
legend('M10');

subplot(2,2,3);    
Mesh(M01);
axis([0 30 0 30 0 1]); 
legend('M01');

subplot(2,2,4);          
Mesh(M11);
axis([0 30 0 30 0 3.5]); 
legend('M11');

function Out=R(x,y)
Out = x^2+y^2;

function Out=Beta(x,y)
Out = atan(x/y);

function Out=q(x,y)
global X;
Out = exp(-R(x,y)/X);

function Out=u(x,y)
global X;
Out = 4*R(x,y)/X;

function Out=g(x,y)
Out = cos(0*Beta(x,y));

function Out=L00(x,y)
Out = 1;

function Out=L01(x,y)
Out = 1-u(x,y);

function Out=L10(x,y)
Out = 1;

function Out=L11(x,y)
Out = 2-u(x,y);
`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'L12MOCY5to9S',
    title: "L12MOCY5to9S - L12MOCY5to9S\r",
    description: "L12MOCY5to9S\r",
    category: "Optics - Light Sources",
    chapter: '7',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# L12MOCY5to9S
# Cylindircal Coordinates for circular mirrors in confocal resonator.
# Field distribution as contour plot of 02 to 20.
# The L(l,p) functions are written out for 00 to 22. The constant in the exponential is
# X.


X = 2
N = 30
i = (0:1:N)
j = (0:1:N)
xi = -4 + 0.30001*i
yj = -4 + 0.30001*j
nx = length(i)
ny = length(j)
for r=1:nx
       for k=1:ny
            x = xi(r)
            y = yj(k)
            M02(r,k)  =(np.cos(2*Beta(x,y))*q(x,y)*L20(x,y))**2
            M20(r,k)  =(np.cos(0*Beta(x,y))*q(x,y)*L02(x,y))**2
            M12(r,k)  =(np.cos(2*Beta(x,y))*q(x,y)*L21(x,y))**2
            M21(r,k)  =(np.cos(1*Beta(x,y))*q(x,y)*L12(x,y))**2
            M22(r,k)  =(np.cos(2*Beta(x,y))*q(x,y)*L22(x,y))**2
fig = plt.figure(1)

plt.subplot(3, 2, 1)

Mesh(M02)
axis([0 30 0 30 0 0.6])
plt.legend(['M02'])

plt.subplot(3, 2, 2)

Mesh(M20)
axis([0 30 0 30 0 6])
plt.legend(['M20'])

plt.subplot(3, 2, 3)

Mesh(M12)
axis([0 30 0 30 0 5])
plt.legend(['M12'])

plt.subplot(3, 2, 4)

Mesh(M21)
axis([0 30 0 30 0 5])
plt.legend(['M21'])

plt.subplot(3, 1, 3)

Mesh(M22)
axis([0 30 0 30 0 15])
plt.legend(['M22'])


Out = x**2+y**2
Out = atan(x/y)
Out = np.exp(-R(x,y)/X)
Out = 4*R(x,y)/X
Out = np.cos(0*Beta(x,y))
Out = 1-2*u(x,y)+(1/2)*u(x,y)**2
Out = 3-3*u(x,y)+(1/2)*u(x,y)**2
Out = 1
Out = 3 - u(x,y)
Out = 6-4*u(x,y)+(1/2)*u(x,y)**2
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% L12MOCY5to9S
% Cylindircal Coordinates for circular mirrors in confocal resonator.
% Field distribution as contour plot of 02 to 20.
% The L(l,p) functions are written out for 00 to 22. The constant in the exponential is
% X.

function L12MOCY5to9S;
global X;
X = 2;
N = 30;
i = (0:1:N);
j = (0:1:N);

xi = -4 + 0.30001*i;
yj = -4 + 0.30001*j;

nx = length(i);
ny = length(j); 
for r=1:nx;
       for k=1:ny;
            x = xi(r);
            y = yj(k);
            M02(r,k)  =(cos(2*Beta(x,y))*q(x,y)*L20(x,y)).^2;
            M20(r,k)  =(cos(0*Beta(x,y))*q(x,y)*L02(x,y)).^2;
            M12(r,k)  =(cos(2*Beta(x,y))*q(x,y)*L21(x,y)).^2;
            M21(r,k)  =(cos(1*Beta(x,y))*q(x,y)*L12(x,y)).^2;
            M22(r,k)  =(cos(2*Beta(x,y))*q(x,y)*L22(x,y)).^2;
       end;
end;

figure(1);
subplot(3,2,1);
Mesh(M02);
axis([0 30 0 30 0 0.6]); 
legend('M02');

subplot(3,2,2);
Mesh(M20);
axis([0 30 0 30 0 6]); 
legend('M20');

subplot(3,2,3);      
Mesh(M12);
axis([0 30 0 30 0 5]); 
legend('M12');

subplot(3,2,4);      
Mesh(M21);
axis([0 30 0 30 0 5]); 
legend('M21');

subplot(3,1,3);         
Mesh(M22);
axis([0 30 0 30 0 15]); 
legend('M22');

function Out=R(x,y)
Out = x^2+y^2;

function Out=Beta(x,y)
Out = atan(x/y);

function Out=q(x,y)
global X;
Out = exp(-R(x,y)/X);

function Out=u(x,y)
global X;
Out = 4*R(x,y)/X;

function Out=g(x,y)
Out = cos(0*Beta(x,y));

function Out=L02(x,y)
Out = 1-2*u(x,y)+(1/2)*u(x,y)^2;

function Out=L12(x,y)
Out = 3-3*u(x,y)+(1/2)*u(x,y)^2;

function Out=L20(x,y)
Out = 1;

function Out=L21(x,y)
Out = 3 - u(x,y);

function Out=L22(x,y)
Out = 6-4*u(x,y)+(1/2)*u(x,y)^2;
`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'LIRJEANS',
    title: "LIRJEANS - L1RJEANS\r",
    description: "L1RJEANS\r",
    category: "Optics - Light Sources",
    chapter: '7',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# L1RJEANS
# The Raleigh Jeans law gives the emitted radiation as Energy/frequency interval
# and per volume.It is given here as Ws/{(1/s)m**3}


v = (5e14:-0.01e14:1e12)
c = 3e8
k = 1.38e-23
T = 1000
y = 8*np.pi*k*T*(v**2)/(c**3)
fig = plt.figure(1)

plt.plot(v,y)

plt.xlim(0, 5e14)
plt.ylim(0, 3e-15)
;                  # PLOTS LIMITS                    
plt.xlabel('v')
plt.legend(['y(v)'])
# Frequency
# 1e11 is 3mm
# 1e14 is 3micron
# 1e17 is 3nm is 30A
# 3e11 is 1mm   
# 3e14 is 1micron
# 3e17 is 1nm is 10A


# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% L1RJEANS
% The Raleigh Jeans law gives the emitted radiation as Energy/frequency interval
% and per volume.It is given here as Ws/{(1/s)m^3}

function LIRJEANS;
v = (5e14:-0.01e14:1e12);
c = 3e8;
k = 1.38e-23
T = 1000;

y = 8*pi*k*T*(v.^2)/(c^3);
figure(1);
plot(v,y);
axis([0 5e14 0 3e-15]);                  % PLOTS LIMITS                    
xlabel('v');
legend('y(v)');

% Frequency
% 1e11 is 3mm
% 1e14 is 3micron
% 1e17 is 3nm is 30A
% 3e11 is 1mm   
% 3e14 is 1micron
% 3e17 is 1nm is 10A

`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'L2BBLS',
    title: "L2BBLS - L2BBLS\r",
    description: "L2BBLS\r",
    category: "Optics - Light Sources",
    chapter: '7',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# L2BBLS
# 1. Black body Radiation. Graph of f(x) =dL/d?, and x =?
# 2. Integration over the wavelength range from 3*10**-6 to 3*10**-5 meters to obtain the
# Radiance.
# 3. Multiplication with area times solid angle to obtain the Radiant energy.

# 1. Black body Radiation. Graph of dL/d????
# Constants for wavelength dependence

c2 = 1.43e-2
c1 = 1.18e-16
T = 1000
x=(3e-5:-0.01e-5:1e-7); # x in meters
# Planck's Law depending on wavelength

fig = plt.figure(1)

plt.plot(x,f(x)
)
plt.xlim(0, 3e-5)
plt.ylim(0, 5e9)
;                  # PLOTS LIMITS                    
plt.xlabel('x')
plt.legend(['f(x)'])
R = quad(@f,3e-6,3e-5)
# Radiance  R = 1.316e4

# 3. Multiplication with area times solid angle to obtain the Radiant energy.
# Area A, Solid angle SA

A = 0.1
SA = 4
RR = A*SA*R  
# RR = 5.263e3 Watts

# RR has the same value as the corresponding value when integrating over frequency.




Out = c1/((x**5)*(np.exp(c2/(x*T))-1))
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% L2BBLS
% 1. Black body Radiation. Graph of f(x) =dL/d?, and x =?
% 2. Integration over the wavelength range from 3*10^-6 to 3*10^-5 meters to obtain the
% Radiance.
% 3. Multiplication with area times solid angle to obtain the Radiant energy.

% 1. Black body Radiation. Graph of dL/d????
% Constants for wavelength dependence
function L2BBLS;
global c1 c2 T;
c2 = 1.43e-2;
c1 = 1.18e-16;
T = 1000;

x=(3e-5:-0.01e-5:1e-7); % x in meters
% Planck's Law depending on wavelength

figure(1);
plot(x,f(x));
axis([0 3e-5 0 5e9]);                  % PLOTS LIMITS                    
xlabel('x');
legend('f(x)');

R = quad(@f,3e-6,3e-5)
% Radiance  R = 1.316e4

% 3. Multiplication with area times solid angle to obtain the Radiant energy.
% Area A, Solid angle SA

A = 0.1;
SA = 4;

RR = A*SA*R  
% RR = 5.263e3 Watts

% RR has the same value as the corresponding value when integrating over frequency.


function Out = f(x) 
global c1 c2 T;
Out = c1./((x.^5).*(exp(c2./(x*T))-1));`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'L3BBFS',
    title: "L3BBFS - L3BBFS\r",
    description: "L3BBFS\r",
    category: "Optics - Light Sources",
    chapter: '7',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# L3BBFS

# 1. Black body Radiation. Graph of f(?) = dL/d?, ? is frequency
# 2. Integration over the wavelength range from 10**14 to 3*10**13 1/s to obtain the
# Radiance.
# 3. Multiplication with area times solid angle to obtain the Radiant energy.

# Constants for frequency dependence


c4 = 4.78e-11
c3 = 1.47e-50
T = 1000
v=(5e14:-0.01e14:1e12)
# Planck's Law depending on frequency

fig = plt.figure(1)

plt.plot(v,f(v)
)
plt.xlim(0, 5e14)
plt.ylim(0, 2e-10)
;                  # PLOTS LIMITS                    
plt.xlabel('v')
plt.legend(['f(v)'])
R = quad(@f,1e13,1e14)
# Radiance  R = 1.316e4 Watts

# 3. Multiplication with area times solid angle to obtain the Radiant energy.
# Area A, Solid angle SA

A = 0.1
SA = 4
RR = A*SA*R  
# RR = 5.263e3 Watts

# RR has the same value as the corresponding value when integrating over wavelength.


Out = (c3/(np.exp(c4*v/T)-1))*(v**3)
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% L3BBFS

% 1. Black body Radiation. Graph of f(?) = dL/d?, ? is frequency
% 2. Integration over the wavelength range from 10^14 to 3*10^13 1/s to obtain the
% Radiance.
% 3. Multiplication with area times solid angle to obtain the Radiant energy.

% Constants for frequency dependence

function L3BBFS;
global c3 c4 T;
c4 = 4.78e-11;
c3 = 1.47e-50;
T = 1000;

v=(5e14:-0.01e14:1e12);
% Planck's Law depending on frequency

figure(1);
plot(v,f(v));
axis([0 5e14 0 2e-10]);                  % PLOTS LIMITS                    
xlabel('v');
legend('f(v)');

R = quad(@f,1e13,1e14)
% Radiance  R = 1.316e4 Watts

% 3. Multiplication with area times solid angle to obtain the Radiant energy.
% Area A, Solid angle SA

A = 0.1;
SA = 4;

RR = A*SA*R  
% RR = 5.263e3 Watts

% RR has the same value as the corresponding value when integrating over wavelength.
function Out = f(v) 
global c3 c4 T;
Out = (c3./(exp(c4*v/T)-1)).*(v.^3);`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'L4STEFS',
    title: "L4STEFS - L4STEFS\r",
    description: "L4STEFS\r",
    category: "Optics - Light Sources",
    chapter: '7',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# L4STEFS

# The Stefan Boltzmann Law. The units are Power/area in Watt/m**2
# A linear and a logarithmic scale are used.

h = 6.626e-34
c = 3e8
k = 1.38e-23
T = np.arange(10, 10000+10, 10)
Sigma = (2/15)*(( (np.pi**5)*(k**4))/((c**2)*(h**3)))
# Sigma = 5.652e-8 kgs-3K-4
yT = Sigma*(T**4)
# Linear y-scale
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(T,yT)

plt.xlim(0, 1e4)
plt.ylim(0, 6e8)
;                  # PLOTS LIMITS                    
plt.xlabel('T')
plt.title('Linear y-scale')
plt.legend(['y(T)'])
# Logarithmic y-scale
plt.subplot(2, 1, 2)

semilogy(T,yT)
plt.xlim(0, 1e4)
plt.ylim(1e-4, 1e9)
;                  # PLOTS LIMITS                    
plt.xlabel('T')
plt.title('Logarithmic y-scale')
plt.legend(['y(T)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% L4STEFS

% The Stefan Boltzmann Law. The units are Power/area in Watt/m^2
% A linear and a logarithmic scale are used.
function L4STEFS;
h = 6.626e-34;
c = 3e8;
k = 1.38e-23;
T = (10:10:10000);
Sigma = (2/15)*(( (pi^5)*(k^4))/((c^2)*(h^3)))
% Sigma = 5.652e-8 kgs-3K-4
yT = Sigma*(T.^4);

% Linear y-scale
figure(1);
subplot(2,1,1);
plot(T,yT);
axis([0 1e4 0 6e8]);                  % PLOTS LIMITS                    
xlabel('T');
title('Linear y-scale');
legend('y(T)');

% Logarithmic y-scale
subplot(2,1,2);
semilogy(T,yT);
axis([0 1e4 1e-4 1e9]);                  % PLOTS LIMITS                    
xlabel('T');
title('Logarithmic y-scale');
legend('y(T)');`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'L5WIENS',
    title: "L5WIENS - L5WienS\r",
    description: "L5WienS\r",
    category: "Optics - Light Sources",
    chapter: '7',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# L5WienS
# Wien's displacement Law
# Graphs of Wien's displacement Law T = 0 to 8000

# Temperature in Kelvin
# Wavelength in meter

T = np.arange(100, 8000+1, 1)
Lamda = (1/T)*2.89e-6
fig = plt.figure(1)

plt.subplot(2, 1, 1)

semilogy(T,Lamda)
plt.xlim(0, 8000)
plt.ylim(1e-10, 1e-7)
;                  # PLOTS LIMITS                    
plt.xlabel('T')
plt.legend(['\lambda(T)'])
# Graphs of Wien's displacement Law T = 0 to 500
TT = np.arange(10, 500+1, 1)
LamdaLamda = (1/TT)*2.89e-6
plt.subplot(2, 1, 2)

semilogy(TT,LamdaLamda)
plt.xlim(0, 500)
plt.ylim(1e-9, 1e-6)
;                  # PLOTS LIMITS                    
plt.xlabel('T')
plt.legend(['\lambda\lambda(TT)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% L5WienS
% Wien's displacement Law
% Graphs of Wien's displacement Law T = 0 to 8000

% Temperature in Kelvin
% Wavelength in meter
function L5WIENS;
T = (100:1:8000);
Lamda = (1./T)*2.89e-6;

figure(1);
subplot(2,1,1);
semilogy(T,Lamda);
axis([0 8000 1e-10 1e-7]);                  % PLOTS LIMITS                    
xlabel('T');
legend('\lambda(T)');

% Graphs of Wien's displacement Law T = 0 to 500
TT = (10:1:500);
LamdaLamda = (1./TT)*2.89e-6;

subplot(2,1,2);
semilogy(TT,LamdaLamda);
axis([0 500 1e-9 1e-6]);                  % PLOTS LIMITS                    
xlabel('T');
legend('\lambda\lambda(TT)');

`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'L6BANDS',
    title: "L6BANDS - L6BANDS\r",
    description: "L6BANDS\r",
    category: "Optics - Light Sources",
    chapter: '7',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# L6BANDS
# Lorentian Line shape

# Frequency interval
m=11
Omega0 = 49/(2**m-1)
OmegaStep = 1/(2**m-1)
Omega = (OmegaStep:OmegaStep:1)
Tau = 1000
g1 = 2*((1/(2*Tau))/((1/((2*Tau)**2))+(Omega-Omega0)**2))
Q = Tau*Omega0
# Q = 23.937

fig = plt.figure(1)

plt.plot(Omega,g1)

plt.xlim(0, 0.04)
plt.ylim(0, 4000)
;                  # PLOTS LIMITS                    
plt.xlabel('\omega')
plt.legend(['g1(\omega)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% L6BANDS
% Lorentian Line shape
function L6BANDS;
% Frequency interval
m=11;

Omega0 = 49/(2^m-1);

OmegaStep = 1/(2^m-1);
Omega = (OmegaStep:OmegaStep:1);
Tau = 1000;

g1 = 2*((1/(2*Tau))./((1/((2*Tau)^2))+(Omega-Omega0).^2));
Q = Tau*Omega0
% Q = 23.937

figure(1);
plot(Omega,g1);
axis([0 0.04 0 4000]);                  % PLOTS LIMITS                    
xlabel('\omega');
legend('g1(\omega)');`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'of',
    title: "of - O1FRNKPSS\r",
    description: "O1FRNKPSS\r",
    category: "Optics - Optical Materials",
    chapter: '8',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# O1FRNKPSS
# Complex reflection coefficients of Fresnel' formulas as function of angle
# of incidence for values of n2 and K.

# Absolute value and imaginary parts are plotted.

# n1, n2, K and ? are globally defined at the graphs.
# Complex reflection coefficients zrp for parallel and zrs for perpendicular case.


Theta = np.arange(0, 90+1, 1)
K = 2
n1 = 1
n2 = 1.5
zrp = (((n2-i*K)/n1)*np.cos(2*(np.pi/360)*Theta)-np.sqrt(1-((n1/(n2-i*K))*np.sin(2*(np.pi/360)*Theta))**2))/(((n2-i*K)/n1)*np.cos(2*(np.pi/360)*Theta)+np.sqrt(1-((n1/(n2-i*K))*np.sin(2*(np.pi/360)*Theta))**2))
zrs = (np.cos(2*(np.pi/360)*Theta)-((n2-i*K)/n1)*np.sqrt(1-((n1/(n2-i*K))*np.sin(2*(np.pi/360)*Theta))**2))/(np.cos(2*(np.pi/360)*Theta)+((n2-i*K)/n1)*np.sqrt(1-((n1/(n2-i*K))*np.sin(2*(np.pi/360)*Theta))**2))
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(Theta,np.abs(zrp)
,Theta,np.abs(zrs))
plt.xlim(0, 100)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('\theta')
plt.legend(['abs(zrp(\theta))', 'abs(zrs(\theta))'])
plt.subplot(2, 1, 2)

plt.plot(Theta,angle(zrp)
,Theta,angle(zrs))
plt.xlim(0, 100)
plt.ylim(-3.5, 3.5)
;                  # PLOTS LIMITS                    
plt.xlabel('\theta')
plt.legend(['angle(zrp(\theta))', 'angle(zrs(\theta))'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% O1FRNKPSS
% Complex reflection coefficients of Fresnel' formulas as function of angle
% of incidence for values of n2 and K.

% Absolute value and imaginary parts are plotted.

% n1, n2, K and ? are globally defined at the graphs.
% Complex reflection coefficients zrp for parallel and zrs for perpendicular case.

function O1FRNKPSS;
Theta = (0:1:90);
K = 2;
n1 = 1;
n2 = 1.5;

zrp = (((n2-i*K)/n1)*cos(2*(pi/360)*Theta)-sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2))./(((n2-i*K)/n1)*cos(2*(pi/360)*Theta)+sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2));
zrs = (cos(2*(pi/360)*Theta)-((n2-i*K)/n1)*sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2))./(cos(2*(pi/360)*Theta)+((n2-i*K)/n1)*sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2));


figure(1);
subplot(2,1,1);
plot(Theta,abs(zrp),Theta,abs(zrs));
axis([0 100 -1 1]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('abs(zrp(\theta))','abs(zrs(\theta))');

subplot(2,1,2);
plot(Theta,angle(zrp),Theta,angle(zrs));
axis([0 100 -3.5 3.5]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('angle(zrp(\theta))','angle(zrs(\theta))');
`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'of',
    title: "of - O2FRSOPS Graphs of Ratios of reflection coefficients\r",
    description: "O2FRSOPS Graphs of Ratios of reflection coefficients\r",
    category: "Optics - Optical Materials",
    chapter: '8',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# O2FRSOPS Graphs of Ratios of reflection coefficients
# Reflection coefficients of Fresnel's formulas as function of angle
# of incidence for n and K. Real part and ratios of real parts are plotted.
# Refractive indices, K values, and ? are globally defined at the graphs.

# Complex zrp, zzrp, zzzrp for parallel and
# zrs, zzrs, zzzrs for perpendicular case.


K = 0.1
KK = 0.5
KKK = 2
n1 = 1
n2 = 1.5
nn2 = 3
Theta = np.arange(0, 90+1, 1)
# K = 0


zrp0 = ((n2/n1)*np.cos(2*(np.pi/360)*Theta)-np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))/((n2/n1)*np.cos(2*(np.pi/360)*Theta)+np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))
zrs0 = (np.cos(2*(np.pi/360)*Theta)-(n2/n1)*np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))/(np.cos(2*(np.pi/360)*Theta)+(n2/n1)*np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))
# K not 0

zrp = (((n2 -i*K)/n1)*np.cos(2*(np.pi/360)*Theta)-np.sqrt(1-((n1/(n2-i*K))*np.sin(2*(np.pi/360)*Theta))**2))/(((n2 -i*K)/n1)*np.cos(2*(np.pi/360)*Theta)+np.sqrt(1-((n1/(n2-i*K))*np.sin(2*(np.pi/360)*Theta))**2))
zrs = (np.cos(2*(np.pi/360)*Theta)-((n2-i*K)/n1)*np.sqrt(1-((n1/(n2-i*K))*np.sin(2*(np.pi/360)*Theta))**2))/(np.cos(2*(np.pi/360)*Theta)+((n2-i*K)/n1)*np.sqrt(1-((n1/(n2-i*K))*np.sin(2*(np.pi/360)*Theta))**2))
# For differen n and K

zzrp = (((nn2 -i*KK)/n1)*np.cos(2*(np.pi/360)*Theta)-np.sqrt(1-((n1/(nn2-i*KK))*np.sin(2*(np.pi/360)*Theta))**2))/(((nn2 -i*KK)/n1)*np.cos(2*(np.pi/360)*Theta)+np.sqrt(1-((n1/(nn2-i*KK))*np.sin(2*(np.pi/360)*Theta))**2))
zzrs = (np.cos(2*(np.pi/360)*Theta)-((nn2-i*KK)/n1)*np.sqrt(1-((n1/(nn2-i*KK))*np.sin(2*(np.pi/360)*Theta))**2))/(np.cos(2*(np.pi/360)*Theta)+((nn2-i*KK)/n1)*np.sqrt(1-((n1/(nn2-i*KK))*np.sin(2*(np.pi/360)*Theta))**2))
zzzrp = (((nn2 -i*KKK)/n1)*np.cos(2*(np.pi/360)*Theta)-np.sqrt(1-((n1/(nn2-i*KKK))*np.sin(2*(np.pi/360)*Theta))**2))/(((nn2 -i*KKK)/n1)*np.cos(2*(np.pi/360)*Theta)+np.sqrt(1-((n1/(nn2-i*KKK))*np.sin(2*(np.pi/360)*Theta))**2))
zzzrs = (np.cos(2*(np.pi/360)*Theta)-((nn2-i*KKK)/n1)*np.sqrt(1-((n1/(nn2-i*KKK))*np.sin(2*(np.pi/360)*Theta))**2))/(np.cos(2*(np.pi/360)*Theta)+((nn2-i*KKK)/n1)*np.sqrt(1-((n1/(nn2-i*KKK))*np.sin(2*(np.pi/360)*Theta))**2))
fig = plt.figure(1)

plt.subplot(3, 2, 1)

plt.plot(Theta,real(zrp0)
,Theta,real(zrp),Theta,real(zzrp),Theta,real(zzzrp))
plt.xlim(0, 100)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('\theta')
plt.legend(['real(zrp0(\theta))', 'real(zrp(\theta))', 'real(zzrp(\theta))', 'real(zzzrp(\theta))'])
plt.subplot(3, 2, 2)

plt.plot(Theta,real(zrs0)
,Theta,real(zrs),Theta,real(zzrs),Theta,real(zzzrs))
plt.xlim(0, 100)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('\theta')
plt.legend(['real(zrs0(\theta))', 'real(zrs(\theta))', 'real(zzrs(\theta))', 'real(zzzrs(\theta))'])
# Ratio: p/s

plt.subplot(3, 1, 2)

plt.plot(Theta,real(zrp0)
/real(zrs0),Theta,real(zrp)/real(zrs),Theta,real(zzrp)/real(zzrs),Theta,real(zzzrp)/real(zzzrs))
plt.xlim(0, 100)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('\theta')
plt.legend(['real(zrp0(\theta))/real(zrs0(\theta))', 'real(zrp(\theta))/real(zrs(\theta))', 'real(zzrp(\theta))/real(zzrs(\theta))', 'real(zzzrp(\theta))/real(zzzrs(\theta))'])
# Ratio: s/p

plt.subplot(3, 1, 3)

plt.plot(Theta,real(zrs0)
/real(zrp0),Theta,real(zrs)/real(zrp),Theta,real(zzrs)/real(zzrp),Theta,real(zzzrs)/real(zzzrp))
plt.xlim(0, 100)
plt.ylim(-300, 200)
;                  # PLOTS LIMITS                    
plt.xlabel('\theta')
plt.legend(['real(zrs0(\theta))/real(zrp0(\theta))', 'real(zrs(\theta))/real(zrp(\theta))', 'real(zzrs(\theta))/real(zzrp(\theta))', 'real(zzzrs(\theta))/real(zzzrp(\theta))'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% O2FRSOPS Graphs of Ratios of reflection coefficients
% Reflection coefficients of Fresnel's formulas as function of angle
% of incidence for n and K. Real part and ratios of real parts are plotted.
% Refractive indices, K values, and ? are globally defined at the graphs.

% Complex zrp, zzrp, zzzrp for parallel and
% zrs, zzrs, zzzrs for perpendicular case.

function O2FRSOPS;
K = 0.1;
KK = 0.5;
KKK = 2;
n1 = 1;
n2 = 1.5;
nn2 = 3;
Theta = (0:1:90);
% K = 0


zrp0 = ((n2/n1)*cos(2*(pi/360)*Theta)-sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2))./((n2/n1)*cos(2*(pi/360)*Theta)+sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));
zrs0 = (cos(2*(pi/360)*Theta)-(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2))./(cos(2*(pi/360)*Theta)+(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));

% K not 0

zrp = (((n2 -i*K)/n1)*cos(2*(pi/360)*Theta)-sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2))./(((n2 -i*K)/n1)*cos(2*(pi/360)*Theta)+sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2));
zrs = (cos(2*(pi/360)*Theta)-((n2-i*K)/n1)*sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2))./(cos(2*(pi/360)*Theta)+((n2-i*K)/n1)*sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2));

% For differen n and K

zzrp = (((nn2 -i*KK)/n1)*cos(2*(pi/360)*Theta)-sqrt(1-((n1/(nn2-i*KK))*sin(2*(pi/360)*Theta)).^2))./(((nn2 -i*KK)/n1)*cos(2*(pi/360)*Theta)+sqrt(1-((n1/(nn2-i*KK))*sin(2*(pi/360)*Theta)).^2));
zzrs = (cos(2*(pi/360)*Theta)-((nn2-i*KK)/n1)*sqrt(1-((n1/(nn2-i*KK))*sin(2*(pi/360)*Theta)).^2))./(cos(2*(pi/360)*Theta)+((nn2-i*KK)/n1)*sqrt(1-((n1/(nn2-i*KK))*sin(2*(pi/360)*Theta)).^2));
zzzrp = (((nn2 -i*KKK)/n1)*cos(2*(pi/360)*Theta)-sqrt(1-((n1/(nn2-i*KKK))*sin(2*(pi/360)*Theta)).^2))./(((nn2 -i*KKK)/n1)*cos(2*(pi/360)*Theta)+sqrt(1-((n1/(nn2-i*KKK))*sin(2*(pi/360)*Theta)).^2));
zzzrs = (cos(2*(pi/360)*Theta)-((nn2-i*KKK)/n1)*sqrt(1-((n1/(nn2-i*KKK))*sin(2*(pi/360)*Theta)).^2))./(cos(2*(pi/360)*Theta)+((nn2-i*KKK)/n1)*sqrt(1-((n1/(nn2-i*KKK))*sin(2*(pi/360)*Theta)).^2));

figure(1);
subplot(3,2,1);
plot(Theta,real(zrp0),Theta,real(zrp),Theta,real(zzrp),Theta,real(zzzrp));
axis([0 100 -1 1]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('real(zrp0(\theta))','real(zrp(\theta))','real(zzrp(\theta))','real(zzzrp(\theta))');

subplot(3,2,2);
plot(Theta,real(zrs0),Theta,real(zrs),Theta,real(zzrs),Theta,real(zzzrs));
axis([0 100 -1 1]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('real(zrs0(\theta))','real(zrs(\theta))','real(zzrs(\theta))','real(zzzrs(\theta))');

% Ratio: p/s

subplot(3,1,2);
plot(Theta,real(zrp0)./real(zrs0),Theta,real(zrp)./real(zrs),Theta,real(zzrp)./real(zzrs),Theta,real(zzzrp)./real(zzzrs));
axis([0 100 -1 1]);                  % PLOTS LIMITS                    
xlabel('\theta');

legend('real(zrp0(\theta))/real(zrs0(\theta))','real(zrp(\theta))/real(zrs(\theta))','real(zzrp(\theta))/real(zzrs(\theta))','real(zzzrp(\theta))/real(zzzrs(\theta))');

% Ratio: s/p

subplot(3,1,3);
plot(Theta,real(zrs0)./real(zrp0),Theta,real(zrs)./real(zrp),Theta,real(zzrs)./real(zzrp),Theta,real(zzzrs)./real(zzzrp));
axis([0 100 -300 200]);                  % PLOTS LIMITS                    
xlabel('\theta');

legend('real(zrs0(\theta))/real(zrp0(\theta))','real(zrs(\theta))/real(zrp(\theta))','real(zzrs(\theta))/real(zzrp(\theta))','real(zzzrs(\theta))/real(zzzrp(\theta))');

`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'O3OSTINS',
    title: "O3OSTINS - O3OSTINS Graphs of n and K\r",
    description: "O3OSTINS Graphs of n and K\r",
    category: "Optics - Optical Materials",
    chapter: '8',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# O3OSTINS Graphs of n and K
# 1. Dielectric Function for models with one oscillator in the infrared spectral
# region.
# The dielectric constant for high frequencies is set arbitrarily to ?inf = 20.
# The model parameters are S, ?1, ?o. We set z = n - iK
# S and ?1 are dimensionless,
# ?o in cm**-1 i

v = np.arange(900, 1200+1, 1)
S1 = 0.09
Gamma1 = 0.02
Epsiloninf = 20
vo1 = 1050
z1 = np.sqrt(Epsiloninf+ S1/(1-(v/vo1)**2-(Gamma1*v)/vo1))
fig = plt.figure(1)

plt.subplot(3, 1, 1)

plt.plot(v,real(z1)
)
plt.xlim(900, 1200)
plt.ylim(-2, 15)
;                  # PLOTS LIMITS                    
plt.xlabel('v')
plt.legend(['real(z1(v))'])
plt.subplot(3, 1, 2)

plt.plot(v,imag(z1)
)
plt.xlim(900, 1200)
plt.ylim(-2, 22)
;                  # PLOTS LIMITS                    
plt.xlabel('v')
plt.legend(['imag(z1(v))'])
# 2. For an optical thin medium with little absorption we have the following
# approximations. The parameters must be chosen such that n is close to
# 1 and K is small.

vv = np.arange(0, 2+0.1, 0.1)
a = 0.5e-5
c = 1e-3
n = 1 + a*((1-vv**2)/((1-vv**2)**2+(vv**2)*c**2))
k = (a*(vv*c))/((1-vv**2)**2+(vv**2)*c**2)
plt.subplot(3, 2, 5)

plt.plot(vv,n)

plt.xlim(0, 2)
plt.ylim(0.99995, 1.00005)
;                  # PLOTS LIMITS                    
plt.xlabel('vv')
plt.legend(['n(vv)'])
plt.subplot(3, 2, 6)

plt.plot(vv,k)

plt.xlim(0, 2)
plt.ylim(0, 0.006)
;                  # PLOTS LIMITS                    
plt.xlabel('vv')
plt.legend(['k(vv)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% O3OSTINS Graphs of n and K
% 1. Dielectric Function for models with one oscillator in the infrared spectral
% region.
% The dielectric constant for high frequencies is set arbitrarily to ?inf = 20.
% The model parameters are S, ?1, ?o. We set z = n - iK
% S and ?1 are dimensionless,
% ?o in cm^-1 i
function O3OSTINS;
v = (900:1:1200);
S1 = 0.09;
Gamma1 = 0.02;
Epsiloninf = 20;
vo1 = 1050;
z1 = sqrt(Epsiloninf+ S1./(1-(v/vo1).^2-(Gamma1*v)/vo1));


figure(1);
subplot(3,1,1);
plot(v,real(z1));
axis([900 1200 -2 15]);                  % PLOTS LIMITS                    
xlabel('v');
legend('real(z1(v))');

subplot(3,1,2);
plot(v,imag(z1));
axis([900 1200 -2 22]);                  % PLOTS LIMITS                    
xlabel('v');
legend('imag(z1(v))');

% 2. For an optical thin medium with little absorption we have the following
% approximations. The parameters must be chosen such that n is close to
% 1 and K is small.

vv = (0:0.1:2);
a = 0.5e-5;
c = 1e-3;
n = 1 + a*((1-vv.^2)./((1-vv.^2).^2+(vv.^2)*c^2));
k = (a*(vv*c))./((1-vv.^2).^2+(vv.^2)*c^2);

subplot(3,2,5);
plot(vv,n);
axis([0 2 0.99995 1.00005]);                  % PLOTS LIMITS                    
xlabel('vv');
legend('n(vv)');

subplot(3,2,6);
plot(vv,k);
axis([0 2 0 0.006]);                  % PLOTS LIMITS                    
xlabel('vv');
legend('k(vv)');
`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'O4SELMRS',
    title: "O4SELMRS - O4SELMRS\r",
    description: "O4SELMRS\r",
    category: "Optics - Optical Materials",
    chapter: '8',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# O4SELMRS
# Graph for a demonstration of the "Sellmeir" presentation of the refractive index.

# For fused quartz we have
c1 = 1.448
c2 = 3.3e5
c3 = 1.23e11
Lamda = np.arange(4000, 8000+1, 1)
n = c1 + c2/(Lamda**2) + c3/(Lamda**4)
fig = plt.figure(1)

plt.plot(Lamda,n)

plt.xlim(4000, 8000)
plt.ylim(1.45, 1.47)
;                  # PLOTS LIMITS                    
xlabel('\lambda','Fontsize',12)
plt.legend(['n(\lambda)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% O4SELMRS
% Graph for a demonstration of the "Sellmeir" presentation of the refractive index.
function O4SELMRS;
% For fused quartz we have
c1 = 1.448;
c2 = 3.3e5;
c3 = 1.23e11;
Lamda = (4000:1:8000);
n = c1 + c2./(Lamda.^2) + c3./(Lamda.^4);

figure(1);
plot(Lamda,n);
axis([4000 8000 1.45 1.47]);                  % PLOTS LIMITS                    
xlabel('\lambda','Fontsize',12);
legend('n(\lambda)');`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'O5METALS',
    title: "O5METALS - O5METALS Calculation of n and K for Copper using the Drude model. \r",
    description: "O5METALS Calculation of n and K for Copper using the Drude model. \r",
    category: "Optics - Optical Materials",
    chapter: '8',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# O5METALS Calculation of n and K for Copper using the Drude model. 
# Calculation of real and imaginary part.
# Expression for low and high frequencies depending on angular frequency.
# 1. General Expression

c = 3e8
Sigma = 6e7; # (OHM m)**-1
Epsilono = 8.85e-12; # C**2/Nm
Tau = 1/4.1e11; # sec

# Angular frequency for 1mm wavelength is 2pi*300*10**9 see below
Omega = linspace(1e11,1e18,5000)
# Omega = (1e11:1e11:1e18)
# The general expression for n+iK=zM(Omega)
zm = np.sqrt(1+((i*Sigma)/(Epsilono*Omega))*(1/(1-i*Omega*Tau)))
fig = plt.figure(1)

plt.subplot(4, 1, 1)

loglog(Omega,real(zm))
plt.xlim(1e11, 1e18)
plt.ylim(1e-4, 1e5)

plt.xlabel('\omega')
plt.legend(['real(zm(\omega))'])
plt.subplot(4, 1, 2)

loglog(Omega,imag(zm))
plt.xlim(1e11, 1e18)
plt.ylim(1e-13, 1e5)

plt.xlabel('\omega')
plt.legend(['imag(zm(\omega))'])
# 2. High frequency limit

nh = 1 - Sigma/(Epsilono*(Omega**2)*Tau)
plt.subplot(4, 1, 3)

semilogx(Omega,nh,Omega,real(zm))
plt.xlim(1e14, 1e18)
plt.ylim(-1, 1.1)

plt.xlabel('\omega')
plt.legend(['nh(\omega)', 'real(zm(\omega))'])
# 3. Low frequency limit

n1 = np.sqrt(Sigma/(2*Epsilono*Omega))
plt.subplot(4, 1, 4)

semilogx(Omega,n1,Omega,real(zm))
plt.xlim(1e11, 1e14)
plt.ylim(0, 6e3)

plt.xlabel('\omega')
plt.legend(['n1(\omega)', 'real(zm(\omega))'])
# frequency
# 3e11 is 1mm
# 3e14 is 1micron
# 3e17 is 1nm is 10A
# 1e11 is 3mm
# 1e14 is 3micron
# 1e17 is 3nm is 30A

# angular frequency
# 1e11 is 3/(2pi) =0.477 mm
# 1e14 is 0.477 micron
# 1e17 is 0.477 nm is 47A

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% O5METALS Calculation of n and K for Copper using the Drude model. 
% Calculation of real and imaginary part.
% Expression for low and high frequencies depending on angular frequency.
% 1. General Expression
function O5METALS;
c = 3e8; 
Sigma = 6e7; % (OHM m)^-1
Epsilono = 8.85e-12; %C^2/Nm
Tau = 1/4.1e11; %sec

% Angular frequency for 1mm wavelength is 2pi*300*10^9 see below
Omega = linspace(1e11,1e18,5000);
%Omega = (1e11:1e11:1e18);

% The general expression for n+iK=zM(Omega)
zm = sqrt(1+((i*Sigma)./(Epsilono*Omega)).*(1./(1-i*Omega*Tau)));

figure(1);
subplot(4,1,1);
loglog(Omega,real(zm))
axis([1e11 1e18 1e-4 1e5]);
xlabel('\omega');
legend('real(zm(\omega))');

subplot(4,1,2);
loglog(Omega,imag(zm))
axis([1e11 1e18 1e-13 1e5]);
xlabel('\omega');
legend('imag(zm(\omega))');

%2. High frequency limit

nh = 1 - Sigma./(Epsilono*(Omega.^2)*Tau);

subplot(4,1,3);
semilogx(Omega,nh,Omega,real(zm))
axis([1e14 1e18 -1 1.1]);
xlabel('\omega');
legend('nh(\omega)','real(zm(\omega))');

% 3. Low frequency limit

n1 = sqrt(Sigma./(2*Epsilono*Omega));

subplot(4,1,4);
semilogx(Omega,n1,Omega,real(zm));
axis([1e11 1e14 0 6e3]);
xlabel('\omega');
legend('n1(\omega)','real(zm(\omega))');


% frequency
% 3e11 is 1mm
% 3e14 is 1micron
% 3e17 is 1nm is 10A
% 1e11 is 3mm
% 1e14 is 3micron
% 1e17 is 3nm is 30A

% angular frequency
% 1e11 is 3/(2pi) =0.477 mm
% 1e14 is 0.477 micron
% 1e17 is 0.477 nm is 47A
`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'O6SKINS',
    title: "O6SKINS - O6SKINS Skin Depth\r",
    description: "O6SKINS Skin Depth\r",
    category: "Optics - Optical Materials",
    chapter: '8',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# O6SKINS Skin Depth
# 1. Skin depth (in meters) for intensity depending on frequency


Epsilono = 8.85e-12 # C**2/Nm
c = 3e8
Omega = logspace(10,14,100)
Sigma = 6e7
One = np.sqrt((Epsilono*c**2)/(2*Omega*Sigma)); # in meter

fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(Omega,One)
plt.xlim(0, 1e14)
plt.ylim(0, 10e-8)

plt.xlabel('\omega')
plt.legend(['I(\omega)'])
# 2. Skin depth (in meters) for intensity depending on wavelength
# ( for checking:For 1 mm wavelength angular frequency is 2?*300* 10**9)

Lamda = logspace(-9,-3,100)
One = np.sqrt((Epsilono*c*Lamda)/(4*np.pi*Sigma))
plt.subplot(2, 1, 2)

semilogx(Lamda,One)
plt.xlim(1e-7, 1e-3)
plt.ylim(0, 6e-8)

plt.xlabel('\lambda')
plt.legend(['I(\lambda)'])
# 1 10**-9 meter is 1 nm =.001 microns= 10A
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% O6SKINS Skin Depth
% 1. Skin depth (in meters) for intensity depending on frequency

function O6SKINS;

Epsilono = 8.85e-12 % C^2/Nm
c = 3e8;
Omega = logspace(10,14,100);
Sigma = 6e7;

One = sqrt((Epsilono*c^2)./(2*Omega*Sigma)); % in meter

figure(1);
subplot(2,1,1);
plot(Omega,One)
axis([0 1e14 0 10e-8]);
xlabel('\omega');
legend('I(\omega)');

% 2. Skin depth (in meters) for intensity depending on wavelength
% ( for checking:For 1 mm wavelength angular frequency is 2?*300* 10^9)

Lamda = logspace(-9,-3,100);
One = sqrt((Epsilono*c*Lamda)/(4*pi*Sigma));

subplot(2,1,2);
semilogx(Lamda,One)
axis([1e-7 1e-3 0 6e-8]);
xlabel('\lambda');
legend('I(\lambda)');

% 1 10^-9 meter is 1 nm =.001 microns= 10A`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'O7REFNKS',
    title: "O7REFNKS - O7REFNKS\r",
    description: "O7REFNKS\r",
    category: "Optics - Optical Materials",
    chapter: '8',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# O7REFNKS
# The reflectance R is plotted for normal incidence for fixed
# n depending on K.

Theta = 0
n1 = 1
n2 = 10
K = logspace(-3,2,100)
z = (((n2-i*K)/n1)*np.cos(2*(np.pi/360)*Theta)- np.sqrt(1-((n1/(n2-i*K))*np.sin(2*(np.pi/360)*Theta))**2))/(((n2-i*K)/n1)*np.cos(2*(np.pi/360)*Theta)+ np.sqrt(1-((n1/(n2-i*K))*np.sin(2*(np.pi/360)*Theta))**2))
R = z*conj(z)
fig = plt.figure(1)

plt.plot(K,R)

plt.xlim(0, 100)
plt.ylim(0.6, 1)

plt.xlabel('K')
plt.legend(['R(K)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% O7REFNKS
% The reflectance R is plotted for normal incidence for fixed
% n depending on K.
function O7REFNKS;

Theta = 0;
n1 = 1;
n2 = 10;
K = logspace(-3,2,100);
z = (((n2-i*K)/n1)*cos(2*(pi/360)*Theta)- sqrt(1-((n1./(n2-i*K))*sin(2*(pi/360)*Theta)).^2))./(((n2-i*K)/n1)*cos(2*(pi/360)*Theta)+ sqrt(1-((n1./(n2-i*K))*sin(2*(pi/360)*Theta)).^2));

R = z.*conj(z);
figure(1);
plot(K,R);
axis([0 100 0.6 1]);
xlabel('K');
legend('R(K)');`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'of',
    title: "of - O8ARDELS Fresnel's Formulas with Absorption\r",
    description: "O8ARDELS Fresnel's Formulas with Absorption\r",
    category: "Optics - Optical Materials",
    chapter: '8',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# O8ARDELS Fresnel's Formulas with Absorption

# Calculation of real part and argument of parallel zrp and perpendicular zrs case
# of Fresnel's formulas with absorption. We assume zrs = rs exp ids and zrp = rp exp idp
# and the argument as function of q.
# The difference of the angle of the two components of the reflected light is plotted.
# This angle is the angle discussed in chapter 5 for light elliptically polarized by reflection.


n1 = 1
n2 = 3
K = 5
Theta = np.arange(0, 89.9+1, 1)
zrp = (((n2-i*K)/n1)*np.cos(2*(np.pi/360)*Theta)- np.sqrt(1-((n1/(n2-i*K))*np.sin(2*(np.pi/360)*Theta))**2))/(((n2-i*K)/n1)*np.cos(2*(np.pi/360)*Theta)+ np.sqrt(1-((n1/(n2-i*K))*np.sin(2*(np.pi/360)*Theta))**2))
zrs = (np.cos(2*(np.pi/360)*Theta)-((n2-i*K)/n1)*np.sqrt(1-((n1/(n2-i*K))*np.sin(2*(np.pi/360)*Theta))**2))/(np.cos(2*(np.pi/360)*Theta)+((n2-i*K)/n1)*np.sqrt(1-((n1/(n2-i*K))*np.sin(2*(np.pi/360)*Theta))**2))
argDelta = angle(zrs)-angle(zrp)-np.pi
fig = plt.figure(1)

plt.plot(Theta,argDelta)

plt.xlim(0, 100)
plt.ylim(-0.1, 6.5)

plt.xlabel('\theta')
plt.legend(['arg\Delta(\theta)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% O8ARDELS Fresnel's Formulas with Absorption

% Calculation of real part and argument of parallel zrp and perpendicular zrs case
% of Fresnel's formulas with absorption. We assume zrs = rs exp ids and zrp = rp exp idp
% and the argument as function of q.
% The difference of the angle of the two components of the reflected light is plotted.
% This angle is the angle discussed in chapter 5 for light elliptically polarized by reflection.

function O8ARDELS;
n1 = 1;
n2 = 3;
K = 5;

Theta = (0:1:89.9);
zrp = (((n2-i*K)/n1)*cos(2*(pi/360)*Theta)- sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2))./(((n2-i*K)/n1)*cos(2*(pi/360)*Theta)+ sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2));
zrs = (cos(2*(pi/360)*Theta)-((n2-i*K)/n1)*sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2))./(cos(2*(pi/360)*Theta)+((n2-i*K)/n1)*sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2));

argDelta = angle(zrs)-angle(zrp)-pi;

figure(1);
plot(Theta,argDelta);
axis([0 100 -0.1 6.5]);
xlabel('\theta');
legend('arg\Delta(\theta)');`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'of',
    title: "of - OA1DELTAFfS\r",
    description: "OA1DELTAFfS\r",
    category: "Optics - Optical Materials",
    chapter: '8',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# OA1DELTAFfS
# Calculation of ratio of real part r of the parallel (p) and perpendicular (s) case,
# and the difference of the arguments of Fresnel's formulas with absorption.
# For values of K we calculate the absolute values of zp = rp exp i?p and
# zs = rs exp i?s and the argument as function of ?.

n = 2
K = 2
Theta = np.arange(0, 90+1, 1)
zp = ((n-i*K)*np.cos(2*np.pi*(Theta/360))-np.sqrt(1-((np.sin(2*np.pi*(Theta/360))**2)/((n-i*K)**2))))/((n-i*K)*np.cos(2*np.pi*(Theta/360))+np.sqrt(1-((np.sin(2*np.pi*(Theta/360))**2)/((n-i*K)**2))))
zs = (np.cos(2*np.pi*(Theta/360))-(n-i*K)*np.sqrt(1-((np.sin(2*np.pi*(Theta/360))**2)/((n-i*K)**2))))/(np.cos(2*np.pi*(Theta/360))+(n-i*K)*np.sqrt(1-((np.sin(2*np.pi*(Theta/360))**2)/((n-i*K)**2))))
fig = plt.figure(1)

plt.subplot(2, 2, 1)

plt.plot(Theta,np.abs(zp)
)
plt.xlim(0, 90)
plt.ylim(0.2, 1)

plt.xlabel('\theta')
plt.legend(['abs(zp(\theta))'])
plt.subplot(2, 2, 2)

plt.plot(Theta,angle(zp)
)
plt.xlim(0, 90)
plt.ylim(-4, 0)

plt.xlabel('\theta')
plt.legend(['angle(zp(\theta))'])
plt.subplot(2, 2, 3)

plt.plot(Theta,np.abs(zs)
)
plt.xlim(0, 90)
plt.ylim(0.6, 1)

plt.xlabel('\theta')
plt.legend(['abs(zs(\theta))'])
plt.subplot(2, 2, 4)

plt.plot(Theta,angle(zs)
)
plt.xlim(0, 100)
plt.ylim(0, 4)

plt.xlabel('\theta')
plt.legend(['angle(zs(\theta))'])
# The ratio of the absolute value of zs/zp, that is P = tan? and the difference of the
# arguments of zs and zp, that is ?. (parallel (p), perpendicular (s))
fig = plt.figure(2)

plt.subplot(3, 1, 1)

plt.plot(Theta,np.abs(zs)
/np.abs(zp))
plt.xlim(0, 100)
plt.ylim(1, 3)

plt.xlabel('\theta')
plt.legend(['abs(zs(\theta))/abs(zp(\theta))'])
Delta = angle(zs)-angle(zp)
plt.subplot(3, 1, 2)

plt.plot(Theta,-Delta)

plt.xlim(0, 90)
plt.ylim(-8, 0)

plt.xlabel('\theta')
plt.legend(['-\Delta'])
Psi = atan(np.abs(zs)/np.abs(zp))
plt.subplot(3, 1, 3)

plt.plot(Theta,Psi)

plt.xlim(0, 90)
plt.ylim(0.7, 1.2)

plt.xlabel('\theta')
plt.legend(['\psi'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% OA1DELTAFfS
% Calculation of ratio of real part r of the parallel (p) and perpendicular (s) case,
% and the difference of the arguments of Fresnel's formulas with absorption.
% For values of K we calculate the absolute values of zp = rp exp i?p and
% zs = rs exp i?s and the argument as function of ?.
function OA1DELTAFFS;
n = 2;
K = 2;
Theta = (0:1:90);

zp = ((n-i*K)*cos(2*pi*(Theta/360))-sqrt(1-((sin(2*pi*(Theta/360)).^2)/((n-i*K)^2))))./((n-i*K)*cos(2*pi*(Theta/360))+sqrt(1-((sin(2*pi*(Theta/360)).^2)/((n-i*K)^2))));

zs = (cos(2*pi*(Theta/360))-(n-i*K)*sqrt(1-((sin(2*pi*(Theta/360)).^2)/((n-i*K)^2))))./(cos(2*pi*(Theta/360))+(n-i*K)*sqrt(1-((sin(2*pi*(Theta/360)).^2)/((n-i*K)^2))));

figure(1);
subplot(2,2,1);
plot(Theta,abs(zp));
axis([0 90 0.2 1]);
xlabel('\theta');
legend('abs(zp(\theta))');

subplot(2,2,2);
plot(Theta,angle(zp));
axis([0 90 -4 0]);
xlabel('\theta');
legend('angle(zp(\theta))');

subplot(2,2,3);
plot(Theta,abs(zs));
axis([0 90 0.6 1]);
xlabel('\theta');
legend('abs(zs(\theta))');

subplot(2,2,4);
plot(Theta,angle(zs));
axis([0 100 0 4]);
xlabel('\theta');
legend('angle(zs(\theta))');

% The ratio of the absolute value of zs/zp, that is P = tan? and the difference of the
% arguments of zs and zp, that is ?. (parallel (p), perpendicular (s))
figure(2);
subplot(3,1,1);
plot(Theta,abs(zs)./abs(zp));
axis([0 100 1 3]);
xlabel('\theta');
legend('abs(zs(\theta))/abs(zp(\theta))');

Delta = angle(zs)-angle(zp);

subplot(3,1,2);
plot(Theta,-Delta);
axis([0 90 -8 0]);
xlabel('\theta');
legend('-\Delta');
Psi = atan(abs(zs)./abs(zp));

subplot(3,1,3);
plot(Theta,Psi);
axis([0 90 0.7 1.2]);
xlabel('\theta');
legend('\psi');`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'OA2METPDS',
    title: "OA2METPDS - OA2METPDS\r",
    description: "OA2METPDS\r",
    category: "Optics - Optical Materials",
    chapter: '8',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# OA2METPDS
# Calculation of n and K from input values P and ? for
# exact and approximate expressions

Delta = 114
P = 0.50
Psi = atan(P)
k = np.arange(1, 40+1, 1)
Thetak = k * 2
# 1.Exact Expression

zk = np.sqrt((np.sin((2*np.pi*Thetak)/360)**2)+(((np.cos(2*Psi)+i*np.sin((2*np.pi*Delta)/360)*np.sin(2*Psi))*(np.sin((2*np.pi*Thetak)/360)**2))/(np.cos((2*np.pi*Thetak)/360)*(np.cos((2*np.pi*Delta)/360)*np.sin(2*Psi)+1)))**2)
nk = real(zk)
Kk = imag(zk)
# 2.For the approximation one disregards the sin**2 term
z1k =(((np.cos(2*Psi)+i*np.sin((2*np.pi*Delta)/360)*np.sin(2*Psi))*(np.sin((2*np.pi*Thetak)/360)**2))/(np.cos((2*np.pi*Thetak)/360)*(np.cos((2*np.pi*Delta)/360)*np.sin(2*Psi)+1)))
nnk = real(z1k)
KKk = imag(z1k)
# 3.Comparison
fig = plt.figure(1)

plt.subplot(3, 2, 1)

plt.plot(Thetak,real(zk)
,Thetak,real(z1k))
plt.xlim(0, 100)
plt.ylim(0, 4)

plt.xlabel('\thetak')
plt.legend(['real(zk)', 'real(z1k)'])
plt.subplot(3, 2, 2)

plt.plot(Thetak,imag(zk)
,Thetak,imag(z1k))
plt.xlim(0, 100)
plt.ylim(0, 8)

plt.xlabel('\thetak')
plt.legend(['imag(zk)', 'imag(z1k)'])
# 4. The approximation can be written as two real expressions

nnk = ((np.sin((2*np.pi*Thetak)/360)**2)*np.cos(2*Psi))/(np.cos((2*np.pi*Thetak)/360)*(1+np.cos((2*np.pi*Delta)/360)*np.sin(2*Psi)))
KKk = ((np.sin((2*np.pi*Thetak)/360)**2)*(np.sin(Delta)*np.sin(2*Psi)))/(np.cos((2*np.pi*Thetak)/360)*(1+np.cos((2*np.pi*Delta)/360)*np.sin(2*Psi)))
plt.subplot(3, 1, 2)

plt.plot(Thetak,nnk,Thetak,real(zk)
,Thetak,real(z1k))
plt.xlim(0, 80)
plt.ylim(0, 2)

plt.xlabel('\thetak')
plt.legend(['nnk', 'real(zk)', 'real(z1k)'])
plt.subplot(3, 1, 3)

plt.plot(Thetak,KKk,Thetak,imag(zk)
,Thetak,imag(z1k))
plt.xlim(0, 80)
plt.ylim(0, 8)

plt.xlabel('\thetak')
plt.legend(['KKk', 'imag(zk)', 'imag(z1k)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% OA2METPDS
% Calculation of n and K from input values P and ? for
% exact and approximate expressions
function OA2METPDS;
Delta = 114;
P = 0.50;
Psi = atan(P);
k = (1:1:40);
Thetak = k * 2;
% 1.Exact Expression

zk = sqrt((sin((2*pi*Thetak)/360).^2)+(((cos(2*Psi)+i*sin((2*pi*Delta)/360)*sin(2*Psi))*(sin((2*pi*Thetak)/360).^2))./(cos((2*pi*Thetak)/360)*(cos((2*pi*Delta)/360)*sin(2*Psi)+1))).^2);
nk = real(zk);
Kk = imag(zk);
% 2.For the approximation one disregards the sin^2 term
z1k =(((cos(2*Psi)+i*sin((2*pi*Delta)/360)*sin(2*Psi))*(sin((2*pi*Thetak)/360).^2))./(cos((2*pi*Thetak)/360)*(cos((2*pi*Delta)/360)*sin(2*Psi)+1)));
nnk = real(z1k);
KKk = imag(z1k);
% 3.Comparison
figure(1);
subplot(3,2,1);
plot(Thetak,real(zk),Thetak,real(z1k));
axis([0 100 0 4]);
xlabel('\thetak');
legend('real(zk)','real(z1k)');

subplot(3,2,2);
plot(Thetak,imag(zk),Thetak,imag(z1k));
axis([0 100 0 8]);
xlabel('\thetak');
legend('imag(zk)','imag(z1k)');

%4. The approximation can be written as two real expressions

nnk = ((sin((2*pi*Thetak)/360).^2)*cos(2*Psi))./(cos((2*pi*Thetak)/360)*(1+cos((2*pi*Delta)/360)*sin(2*Psi)));

KKk = ((sin((2*pi*Thetak)/360).^2)*(sin(Delta)*sin(2*Psi)))./(cos((2*pi*Thetak)/360)*(1+cos((2*pi*Delta)/360)*sin(2*Psi)));

subplot(3,1,2);
plot(Thetak,nnk,Thetak,real(zk),Thetak,real(z1k));
axis([0 80 0 2]);
xlabel('\thetak');
legend('nnk','real(zk)','real(z1k)');

subplot(3,1,3);
plot(Thetak,KKk,Thetak,imag(zk),Thetak,imag(z1k));
axis([0 80 0 8]);
xlabel('\thetak');
legend('KKk','imag(zk)','imag(z1k)');`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'for',
    title: "for - F10FTGAUSGS\r",
    description: "F10FTGAUSGS\r",
    category: "Optics - Fourier Transform",
    chapter: '9',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# F10FTGAUSGS
# Complex Fourier transformation of Gauss function for
# two values of a and for general Fourier Transformation.
# The maximum is at i = 0. The FT (inverse) of the FT is also calculated.

i = np.arange(0, 325+1, 1)
A = 1
a = 100
aa = 50
y1 = A*np.exp(-a*((i/255)**2))
y2 = A*np.exp(-aa*((i/255)**2))
fig = plt.figure(1)

plt.subplot(3, 1, 1)

plt.plot(i/255,y1,i/255,y2)

plt.xlim(0, 1.5)
plt.ylim(0, 1)

plt.xlabel('i/255')
plt.legend(['y1', 'y2'])

c1 = fft(y1)
c2 = fft(y2)
N = length(c2)-1; # N=325
j=(0:1:N)
plt.subplot(3, 1, 2)

plt.plot(j,real(c1)
/np.sqrt(N+1),j,real(c2)/np.sqrt(N+1))
plt.xlim(0, 400)
plt.ylim(0, 2)

plt.xlabel('j')
plt.legend(['real(c1)/sqrt(N+1)', 'real(c2)/sqrt(N+1)'])
zf1 = ifft(c1)
zf2 = ifft(c2)
N2 = length(zf2)-1
i = (0:1:N2)
plt.subplot(3, 1, 3)

plt.plot(i/255,zf1,i/255,zf2)

plt.xlim(0, 0.6)
plt.ylim(0, 1)

plt.xlabel('i/255')
plt.legend(['zf1', 'zf2'])
# The coordinate is again i/255


# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% F10FTGAUSGS
% Complex Fourier transformation of Gauss function for
% two values of a and for general Fourier Transformation.
% The maximum is at i = 0. The FT (inverse) of the FT is also calculated.
function F10FTGAUSGS;
i = (0:1:325);
A = 1;
a = 100;
aa = 50;
y1 = A*exp(-a*((i/255).^2));
y2 = A*exp(-aa*((i/255).^2));

figure(1);
subplot(3,1,1);
plot(i/255,y1,i/255,y2);
axis([0 1.5 0 1]);
xlabel('i/255');
legend('y1','y2');

c1 = fft(y1);
c2 = fft(y2);
N = length(c2)-1; % N=325
j=(0:1:N);

subplot(3,1,2);
plot(j,real(c1)/sqrt(N+1),j,real(c2)/sqrt(N+1));
axis([0 400 0 2]);
xlabel('j');
legend('real(c1)/sqrt(N+1)','real(c2)/sqrt(N+1)');

zf1 = ifft(c1);
zf2 = ifft(c2);


N2 = length(zf2)-1;
i = (0:1:N2);

subplot(3,1,3);
plot(i/255,zf1,i/255,zf2);
axis([0 0.6 0 1]);
xlabel('i/255');
legend('zf1','zf2');
% The coordinate is again i/255

`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'F11CONVOS',
    title: "F11CONVOS - F11CONVOS\r",
    description: "F11CONVOS\r",
    category: "Optics - Fourier Transform",
    chapter: '9',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# F11CONVOS
# Convolution integral for functions y and S

b2 = 0.2
f = 800
a = 1
Lamda = 0.0005
k = (2*np.pi)/Lamda
X = np.arange(0, 1+0.001, 0.001)
# tol = 0.01
# Function S
Sx = S(X)
# Function y
yx = y(X)
fig = plt.figure(1)

plt.subplot(2, 2, 1)

plt.plot(X,yx)

plt.xlim(0, 1)
plt.ylim(0, 1.5)

plt.xlabel('X')
plt.legend(['y(X)'])
plt.subplot(2, 2, 2)

plt.plot(X,Sx)

plt.xlim(0, 1)
plt.ylim(-1, 1)

plt.xlabel('X')
plt.legend(['S(X)'])
nx = length(X)
for jk=1:nx
    Ix(jk) = 2*quad(@If,0,0.5,[],[],X(jk))
plt.subplot(2, 1, 2)

plt.plot(X,Ix,X,Sx)

plt.xlim(0, 1)
plt.ylim(-1, 1)

plt.xlabel('X')
plt.legend(['I(X)', 'S(X)'])
Out = (logical(b2-X)>=0)
Out = np.sin((k*a*X)/f)
Out = y(XX)*(np.sin(k*a*(X-XX)/f))
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% F11CONVOS
% Convolution integral for functions y and S
function F11CONVOS;
global k a f b2;
b2 = 0.2;
f = 800;
a = 1;
Lamda = 0.0005;
k = (2*pi)/Lamda;

X = (0:0.001:1);
% tol = 0.01;
% Function S
Sx = S(X);

% Function y
yx = y(X);

figure(1);
subplot(2,2,1);
plot(X,yx);
axis([0 1 0 1.5]);
xlabel('X');
legend('y(X)');

subplot(2,2,2);
plot(X,Sx);
axis([0 1 -1 1]);
xlabel('X');
legend('S(X)');

nx = length(X);
for jk=1:nx
    Ix(jk) = 2*quad(@If,0,0.5,[],[],X(jk));
end;

subplot(2,1,2);
plot(X,Ix,X,Sx);
axis([0 1 -1 1]);
xlabel('X');
legend('I(X)','S(X)');

function Out=y(X)
global b2;
Out = (logical(b2-X)>=0);

function Out=S(X)
global k a f;
Out = sin((k*a*X)/f);

function Out=If(XX,X)
global k a f;
Out = y(XX).*(sin(k*a*(X-XX)/f));`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'F12FTDISC1S',
    title: "F12FTDISC1S - F12FTDISC1S\r",
    description: "F12FTDISC1S\r",
    category: "Optics - Fourier Transform",
    chapter: '9',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# F12FTDISC1S

# Graph of cosine functions depending on i = 1,2,3....and frequencies 1/128,2/128
# and so on to 130/128. Look for the repetition.

# Length interval is i = 1,2,3...

i = np.arange(0, 140+1, 1)
# 1.Frequencies
# f = 1/128, 2/128, 3/128
y1 = np.cos(2*np.pi*(1/128)*i)
y2 = np.cos(2*np.pi*(2/128)*i)
y3 = np.cos(2*np.pi*(3/128)*i)
fig = plt.figure(1)

plt.subplot(3, 1, 1)

plt.plot(i,y1,i,y2,i,y3)

plt.xlim(0, 140)
plt.ylim(-1, 1)

plt.xlabel('i')
plt.legend(['y1', 'y2', 'y3'])

# 2.Frequency 64/128
y64 = np.cos(2*np.pi*(64/128)*i)
plt.subplot(3, 1, 2)

plt.plot(i,y64)

plt.xlim(0, 140)
plt.ylim(-1, 1)

plt.xlabel('i')
plt.legend(['y64'])

# 3.Frequencies
# 127/128, 128/128, 129/128, 130/128

y127 = np.cos(2*np.pi*(127/128)*i)
y128 = np.cos(2*np.pi*(128/128)*i); # will not show up on the graph
y129 = np.cos(2*np.pi*(129/128)*i); # same as 127/128 and 1/128
y130 = np.cos(2*np.pi*(130/128)*i); # same as 2/128

plt.subplot(3, 1, 3)

plt.plot(i,y127,i,y128,i,y129,i,y130)

plt.xlim(0, 140)
plt.ylim(-1, 1)

plt.xlabel('i')
plt.legend(['y127', 'y128', 'y129', 'y130'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% F12FTDISC1S

% Graph of cosine functions depending on i = 1,2,3....and frequencies 1/128,2/128
% and so on to 130/128. Look for the repetition.

% Length interval is i = 1,2,3...
function F12FTDISC1S;
i = (0:1:140);

% 1.Frequencies
% f = 1/128, 2/128, 3/128
y1 = cos(2*pi*(1/128)*i);
y2 = cos(2*pi*(2/128)*i);
y3 = cos(2*pi*(3/128)*i);

figure(1);
subplot(3,1,1);
plot(i,y1,i,y2,i,y3);
axis([0 140 -1 1]);
xlabel('i');
legend('y1','y2','y3');

% 2.Frequency 64/128
y64 = cos(2*pi*(64/128)*i);

subplot(3,1,2);
plot(i,y64);
axis([0 140 -1 1]);
xlabel('i');
legend('y64');

% 3.Frequencies
% 127/128, 128/128, 129/128, 130/128

y127 = cos(2*pi*(127/128)*i);
y128 = cos(2*pi*(128/128)*i); % will not show up on the graph
y129 = cos(2*pi*(129/128)*i); % same as 127/128 and 1/128
y130 = cos(2*pi*(130/128)*i); % same as 2/128

subplot(3,1,3);
plot(i,y127,i,y128,i,y129,i,y130);
axis([0 140 -1 1]);
xlabel('i');
legend('y127','y128','y129','y130');`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'show',
    title: "show - F13DTDISC2S\r",
    description: "F13DTDISC2S\r",
    category: "Optics - Fourier Transform",
    chapter: '9',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# F13DTDISC2S
# The cos-function show "mirror" symmetry around the
# middle of the interval, at the beginning and at the end.

# Length interval is 1,2,3...
# 1.Frequencies f = 1/128, 2/128, 3/128
i = np.arange(0, 127+1, 1)
y1 = np.cos(2*np.pi*(1/128)*i)
y2 = np.cos(2*np.pi*(2/128)*i)
y3 = np.cos(2*np.pi*(63/128)*i)
fig = plt.figure(1)

plt.subplot(3, 1, 1)

plt.plot(i,y1,i,y2,i,y3)

plt.xlim(0, 140)
plt.ylim(-1, 1)

plt.xlabel('i')
plt.legend(['y1', 'y2', 'y3'])

# 2.Frequencies f=63/128, 64/128, 65/128
y63 = np.cos(2*np.pi*(63/128)*i)
y64 = np.cos(2*np.pi*(64/128)*i)
y65 = np.cos(2*np.pi*(65/128)*i)
plt.subplot(3, 1, 2)

plt.plot(i,y63,i,y64,i,y65)

plt.xlim(0, 128)
plt.ylim(-1, 1)

plt.xlabel('i')
plt.legend(['y63', 'y64', 'y65'])

# 3.Expended graph
j = np.arange(20, 50+1, 1)
y63j = np.cos(2*np.pi*(63/128)*j)
y64j = np.cos(2*np.pi*(64/128)*j)
y65j = np.cos(2*np.pi*(65/128)*j)
plt.subplot(3, 1, 3)

plt.plot(j,y63j,j,y64j,j,y65j)

plt.xlim(20, 50)
plt.ylim(-1, 1)

plt.xlabel('j')
plt.legend(['y63j', 'y64j', 'y65j'])

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% F13DTDISC2S
% The cos-function show "mirror" symmetry around the
% middle of the interval, at the beginning and at the end.
function F13DTDISC2S;
% Length interval is 1,2,3...
% 1.Frequencies f = 1/128, 2/128, 3/128
i = (0:1:127);
y1 = cos(2*pi*(1/128)*i);
y2 = cos(2*pi*(2/128)*i);
y3 = cos(2*pi*(63/128)*i);

figure(1);
subplot(3,1,1);
plot(i,y1,i,y2,i,y3);
axis([0 140 -1 1]);
xlabel('i');
legend('y1','y2','y3');

% 2.Frequencies f=63/128, 64/128, 65/128
y63 = cos(2*pi*(63/128)*i);
y64 = cos(2*pi*(64/128)*i);
y65 = cos(2*pi*(65/128)*i);

subplot(3,1,2);
plot(i,y63,i,y64,i,y65);
axis([0 128 -1 1]);
xlabel('i');
legend('y63','y64','y65');

% 3.Expended graph
j = (20:1:50);
y63j = cos(2*pi*(63/128)*j);
y64j = cos(2*pi*(64/128)*j);
y65j = cos(2*pi*(65/128)*j);

subplot(3,1,3);
plot(j,y63j,j,y64j,j,y65j);
axis([20 50 -1 1]);
xlabel('j');
legend('y63j','y64j','y65j');
`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'F14MICHOPS',
    title: "F14MICHOPS - F14MICHOPS\r",
    description: "F14MICHOPS\r",
    category: "Optics - Fourier Transform",
    chapter: '9',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# F14MICHOPS

# Michelson interferometer. Beamsplitter is assumed to be ideal with 50-50
# efficinecy.Fringe pattern on displacement of mirrors.

# Amplitude and intensity pattern depending on displacement x of mirror.
# The "space coordinate" is a sequence of discreate points, all having the same
# distance.


# 1. Cosine function, one frequency, amplitude.
# The space coordinate runs from 0 to 127
i = np.arange(0, 127+1, 1)
kmax = 1; # we have k=1/128 as the frequency

nx = length(i)
for ui=1:nx
    sum = 0
    for rk=1:kmax
        sum = sum + np.cos(2*np.pi*(rk/128)*i(ui))
    u1(ui) = sum
fig = plt.figure(1)

plt.subplot(4, 1, 1)

plt.plot(i,u1)

plt.xlim(0, 140)
plt.ylim(-1, 1)

plt.xlabel('i')
plt.legend(['u1'])

# We just go through one cycle

# 2. Cosine function, one frequency, intensity.
plt.subplot(4, 1, 2)

plt.plot(i,(u1)
**2)
plt.xlim(0, 128)
plt.ylim(-1, 1)

plt.xlabel('i')
plt.legend(['(u1)^2'])
# 3. Cosine function, many frequencies, amplitude.
i = np.arange(0, 127+1, 1)
nx = length(i)
kmax = 20
for u2i=1:nx
    sum = 0
    for rk=1:kmax
        sum = sum + np.cos(2*np.pi*(rk/128)*i(u2i))
    u2(u2i) = sum
# k = 1/128, 2/128.. 20/128 are the frequencies,

plt.subplot(4, 1, 3)

plt.plot(i,u2)

plt.xlim(0, 140)
plt.ylim(-20, 20)

plt.xlabel('i')
plt.legend(['u2'])
# 4. Cosine function, many frequencies, intensity.


plt.subplot(4, 1, 4)

plt.plot(i,(u2**2)
)
plt.xlim(0, 140)
plt.ylim(0, 400)

plt.xlabel('i')
plt.legend(['(u2)^2'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% F14MICHOPS

% Michelson interferometer. Beamsplitter is assumed to be ideal with 50-50
% efficinecy.Fringe pattern on displacement of mirrors.

% Amplitude and intensity pattern depending on displacement x of mirror.
% The "space coordinate" is a sequence of discreate points, all having the same
% distance.

function F14MICHOPS;
% 1. Cosine function, one frequency, amplitude.
% The space coordinate runs from 0 to 127
i = (0:1:127);
kmax = 1; % we have k=1/128 as the frequency

nx = length(i);
for ui=1:nx
    sum = 0;
    for rk=1:kmax
        sum = sum + cos(2*pi*(rk/128)*i(ui));            
    end;
    u1(ui) = sum;
end;


figure(1);
subplot(4,1,1);
plot(i,u1);
axis([0 140 -1 1]);
xlabel('i');
legend('u1');

% We just go through one cycle

% 2. Cosine function, one frequency, intensity.
subplot(4,1,2);
plot(i,(u1).^2);
axis([0 128 -1 1]);
xlabel('i');
legend('(u1)^2');
% 3. Cosine function, many frequencies, amplitude.
i = (0:1:127);
nx = length(i);
kmax = 20;
for u2i=1:nx
    sum = 0;
    for rk=1:kmax
        sum = sum + cos(2*pi*(rk/128)*i(u2i));            
    end;
    u2(u2i) = sum;
end;
% k = 1/128, 2/128.. 20/128 are the frequencies,

subplot(4,1,3);
plot(i,u2);
axis([0 140 -20 20]);
xlabel('i');
legend('u2');
% 4. Cosine function, many frequencies, intensity.


subplot(4,1,4);
plot(i,(u2.^2));
axis([0 140 0 400]);
xlabel('i');
legend('(u2)^2');`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'F15FOLDS',
    title: "F15FOLDS - F15FOLDS\r",
    description: "F15FOLDS\r",
    category: "Optics - Fourier Transform",
    chapter: '9',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# F15FOLDS
# Folding of the spectrum.
# For the sampling interval 1/255, highest frequency is 128,
# the frequencies are at 65, 85, 105, all below 127.

# a.Sample interval i/255
i = np.arange(0, 255+1, 1)
y1 = np.cos(2*np.pi*65*(i/255)) + np.cos(2*np.pi*85*(i/255)) + np.cos(2*np.pi*105*(i/255))
fig = plt.figure(1)

plt.subplot(3, 2, 1)

plt.plot(i/255,y1)

plt.xlim(0, 1)
plt.ylim(-2, 4)

plt.xlabel('i/255')
plt.legend(['y1'])

c = fft(y1)
N = length(c) - 1
j = (0:1:N)
plt.subplot(3, 2, 2)

plt.plot(j,real(c)
/np.sqrt(N+1))
plt.xlim(0, 140)
plt.ylim(-5, 10)

plt.xlabel('j')
plt.legend(['real(c)/sqrt(N+1)'])
# Frequency peaks are at 65 85 105

# b.Sample interval 2i/255

# For the sampling interval 2/255, highest frequency is 64, the original frequencies are at
# 65, 85, 105, all larger than 64 and appear folded.

y2 = np.cos(2*np.pi*65*((2*i)/255))+np.cos(2*np.pi*85*((2*i)/255)) + np.cos(2*np.pi*105*((2*i)/255))
plt.subplot(3, 2, 3)

plt.plot(2*(i/255)
,y2)
plt.xlim(0, 2)
plt.ylim(-2, 4)

plt.xlabel('2*(i/255)')
plt.legend(['y2'])

cc = fft(y2)
N = length(cc) - 1
j = (0:1:N)
plt.subplot(3, 2, 4)

plt.plot(j,real(cc)
/np.sqrt(N+1))
plt.xlim(0, 140)
plt.ylim(-5, 10)

plt.xlabel('j')
plt.legend(['real(cc)/sqrt(N+1)'])
# Frequency peaks appear 65 at--> 125
# 85 at--> 85
# 105 at--> 45

# c. Sample interval 4i/255
# For the sampling interval 4/255, highest frequency 32, the frequencies are
# higher than 1 times 32 and 2 times 32.

y4 = np.cos(2*np.pi*65*((4*i)/255)) + np.cos(2*np.pi*85*((4*i)/255)) + np.cos(2*np.pi*105*((4*i)/255))
plt.subplot(3, 2, 5)

plt.plot(4*(i/255)
, y4)
plt.xlim(0, 4)
plt.ylim(-2, 4)

plt.xlabel('4*(i/255)')
plt.legend(['y4'])

ccc = fft(y4)
N = length(ccc)-1
j = (0:1:N)
plt.subplot(3, 2, 6)

plt.plot(j,real(ccc)
/np.sqrt(N+1))
plt.xlim(0, 140)
plt.ylim(-5, 10)

plt.xlabel('j')
plt.legend(['real(ccc)/sqrt(N+1)'])
# Frequency peaks appear 65 at--> 5
# 85 at--> 85
# 105 at--> 90

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% F15FOLDS
% Folding of the spectrum.
% For the sampling interval 1/255, highest frequency is 128,
% the frequencies are at 65, 85, 105, all below 127.
function F15FOLDS;
% a.Sample interval i/255
i = (0:1:255);
y1 = cos(2*pi*65*(i/255)) + cos(2*pi*85*(i/255)) + cos(2*pi*105*(i/255));

figure(1);
subplot(3,2,1);
plot(i/255,y1);
axis([0 1 -2 4]);
xlabel('i/255');
legend('y1');

c = fft(y1);
N = length(c) - 1;
j = (0:1:N);

subplot(3,2,2);
plot(j,real(c)/sqrt(N+1));
axis([0 140 -5 10]);
xlabel('j');
legend('real(c)/sqrt(N+1)');
% Frequency peaks are at 65 85 105

% b.Sample interval 2i/255

% For the sampling interval 2/255, highest frequency is 64, the original frequencies are at
% 65, 85, 105, all larger than 64 and appear folded.

y2 = cos(2*pi*65*((2*i)/255))+cos(2*pi*85*((2*i)/255)) + cos(2*pi*105*((2*i)/255));

subplot(3,2,3);
plot(2*(i/255),y2);
axis([0 2 -2 4]);
xlabel('2*(i/255)');
legend('y2');

cc = fft(y2);
N = length(cc) - 1;
j = (0:1:N);


subplot(3,2,4);
plot(j,real(cc)/sqrt(N+1));
axis([0 140 -5 10]);
xlabel('j');
legend('real(cc)/sqrt(N+1)');
% Frequency peaks appear 65 at--> 125
%                        85 at--> 85
%                       105 at--> 45

% c. Sample interval 4i/255
% For the sampling interval 4/255, highest frequency 32, the frequencies are
% higher than 1 times 32 and 2 times 32.

y4 = cos(2*pi*65*((4*i)/255)) + cos(2*pi*85*((4*i)/255)) + cos(2*pi*105*((4*i)/255));

subplot(3,2,5);
plot(4*(i/255), y4);
axis([0 4 -2 4]);
xlabel('4*(i/255)');
legend('y4');

ccc = fft(y4);
N = length(ccc)-1;
j = (0:1:N);

subplot(3,2,6);
plot(j,real(ccc)/sqrt(N+1));
axis([0 140 -5 10]);
xlabel('j');
legend('real(ccc)/sqrt(N+1)');

% Frequency peaks appear 65 at--> 5
%                        85 at--> 85
%                       105 at--> 90
`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'and',
    title: "and - F16APODIS\r",
    description: "F16APODIS\r",
    category: "Optics - Fourier Transform",
    chapter: '9',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# F16APODIS
# Fourier transformation of sine-function and Appodisation


# 1.Original function
f = 31
k = np.arange(0, 255+1, 1)
y = np.cos(2*np.pi*f*(k/255))
fig = plt.figure(1)

plt.subplot(3, 2, 1)

plt.plot(k/255,y)

plt.xlim(0, 1)
plt.ylim(-1, 1)

plt.xlabel('k/255')
plt.legend(['y'])

# 2.Step function
d = 255
i = np.arange(0, 400+1, 1)
p = ((logical(i)>=0) - (logical(i-d)>=0))
plt.subplot(3, 2, 2)

plt.plot(i/255,real(p)
,i/255,imag(p))
plt.xlim(0, 2)
plt.ylim(-0.5, 1.5)

plt.xlabel('i/255')
plt.legend(['real(p)', 'imag(p)'])
yp = np.cos(2*np.pi*f*(i/255))*p
plt.subplot(3, 2, 3)

plt.plot(i/255,yp)

plt.xlim(0, 1.6)
plt.ylim(-1, 1)

plt.xlabel('i/255')
plt.legend(['yp'])

# 3.Fourier transformation of y times p, we have to use 255 points
k = np.arange(0, 255+1, 1)
x = np.cos(2*np.pi*f*(k/255))*((logical(k)>=0) - (logical(k-d)>=0))
c = fft(x)
N = length(c) - 1
j =(0:1:N)
plt.subplot(3, 2, 4)

plt.plot(j,real(c)
/np.sqrt(N+1))
plt.xlim(-5, 140)
plt.ylim(-2, 8)

plt.xlabel('j')
plt.legend(['real(c)/sqrt(N+1)'])
# 4.Triangle function
q = 1-k/255
ay = q*y
plt.subplot(3, 2, 5)

plt.plot(k/255,ay)

plt.xlim(0, 1)
plt.ylim(-1, 1)

plt.xlabel('k/255')
plt.legend(['ay'])

# 5.Fourier transformation of y times p, we have to use 255 points

c = fft(ay)
N = length(c) - 1
j = (0:1:N)
plt.subplot(3, 2, 6)

plt.plot(j, real(c)
/np.sqrt(N+1))
plt.xlim(0, 140)
plt.ylim(-2, 8)

plt.xlabel('j')
plt.legend(['real(c)/sqrt(N+1)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% F16APODIS
% Fourier transformation of sine-function and Appodisation

function F16APODIS;
% 1.Original function
f = 31;
k = (0:1:255);
y = cos(2*pi*f*(k/255));

figure(1);
subplot(3,2,1);
plot(k/255,y);
axis([0 1 -1 1]);
xlabel('k/255');
legend('y');

% 2.Step function
d = 255;
i = (0:1:400);
p = ((logical(i)>=0) - (logical(i-d)>=0));

subplot(3,2,2);
plot(i/255,real(p),i/255,imag(p));
axis([0 2 -0.5 1.5]);
xlabel('i/255');
legend('real(p)','imag(p)');

yp = cos(2*pi*f*(i/255)).*p;

subplot(3,2,3);
plot(i/255,yp);
axis([0 1.6 -1 1]);
xlabel('i/255');
legend('yp');

% 3.Fourier transformation of y times p, we have to use 255 points
k = (0:1:255);
x = cos(2*pi*f*(k/255)).*((logical(k)>=0) - (logical(k-d)>=0));
c = fft(x);
N = length(c) - 1;
j =(0:1:N);



subplot(3,2,4);
plot(j,real(c)/sqrt(N+1));
axis([-5 140 -2 8]);
xlabel('j');
legend('real(c)/sqrt(N+1)');

% 4.Triangle function
q = 1-k/255;
ay = q.*y;

subplot(3,2,5);
plot(k/255,ay);
axis([0 1 -1 1]);
xlabel('k/255');
legend('ay');

% 5.Fourier transformation of y times p, we have to use 255 points

c = fft(ay);
N = length(c) - 1;
j = (0:1:N);

subplot(3,2,6);
plot(j, real(c)/sqrt(N+1));
axis([0 140 -2 8]);
xlabel('j');
legend('real(c)/sqrt(N+1)');

`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'of',
    title: "of - F1FTSTEPS\r",
    description: "F1FTSTEPS\r",
    category: "Optics - Fourier Transform",
    chapter: '9',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# F1FTSTEPS
# The real FT is used.
# Fourier transform of a SINGLE SIDED step function of width 0 to d.


i = np.arange(0, 255+1, 1)
d = 20
nx = length(i)
x = (logical(i)>=0) - (logical(i-d)>=0)

fig = plt.figure(1)

plt.subplot(3, 1, 1)

plt.plot(i/255,real(x)
,i/255,imag(x))
plt.xlim(0, 1)
plt.ylim(-0.5, 1.5)

plt.xlabel('i/255')
plt.legend(['real(x)', 'imag(x)'])
# Fourier transform
c = fft(x)
# N = 128
N = length(c)-1
j = (0:1:N)
plt.subplot(3, 1, 2)

plt.plot(j/255,real(c)
/np.sqrt(N+1),j/255,-imag(c)/np.sqrt(N+1))
plt.xlim(0, 0.6)
plt.ylim(-1, 2)

plt.xlabel('j/255')
plt.legend(['real(c)/sqrt(N+1)', '-imag(c)/sqrt(N+1)'])
# The first zero of the FT
# is at 1/2d

# Fourier transform - inverse of Fourier transform
y = ifft(c)
N = length(c)-1
j = (0:1:N)
# 1/(2*d)=0.025

plt.subplot(3, 1, 3)

plt.plot(j/255,real(y)
,j/255,imag(y))
plt.xlim(0, 0.6)
plt.ylim(-0.5, 1.5)

plt.xlabel('j/255')
plt.legend(['real(y)', 'imag(y)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% F1FTSTEPS
% The real FT is used.
% Fourier transform of a SINGLE SIDED step function of width 0 to d.

function F1FTSTEPS;
i = (0:1:255);
d = 20;
nx = length(i);
x = (logical(i)>=0) - (logical(i-d)>=0)

figure(1);
subplot(3,1,1);
plot(i/255,real(x),i/255,imag(x));
axis([0 1 -0.5 1.5]);
xlabel('i/255');
legend('real(x)','imag(x)');

%Fourier transform
c = fft(x);
%N = 128
N = length(c)-1;
j = (0:1:N);

subplot(3,1,2);
plot(j/255,real(c)/sqrt(N+1),j/255,-imag(c)/sqrt(N+1));
axis([0 0.6 -1 2]);
xlabel('j/255');
legend('real(c)/sqrt(N+1)','-imag(c)/sqrt(N+1)');

% The first zero of the FT
% is at 1/2d

%Fourier transform - inverse of Fourier transform
y = ifft(c);
N = length(c)-1;
j = (0:1:N);

% 1/(2*d)=0.025

subplot(3,1,3);
plot(j/255,real(y),j/255,imag(y));
axis([0 0.6 -0.5 1.5]);
xlabel('j/255');
legend('real(y)','imag(y)');`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'of',
    title: "of - F2FTSTEPDS\r",
    description: "F2FTSTEPDS\r",
    category: "Optics - Fourier Transform",
    chapter: '9',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# F2FTSTEPDS
# The real FT is used.
# Fourier transform of DOUBLE SIDED step function of width 0 to d.


# Original Function
i = np.arange(0, 255+1, 1)
d = 20
nx = length(i)
x = (logical(i)>=0) - (logical(i-d)>=0) + (logical(i-255+d)>=0)
fig = plt.figure(1)

plt.subplot(3, 1, 1)

plt.plot(i/255,real(x)
,i/255,imag(x))
plt.xlim(0, 1)
plt.ylim(-0.5, 1.5)

plt.xlabel('i/255')
plt.legend(['real(x)', 'imag(x)'])
# Fourier transform
c = fft(x)
# N = 128
N = length(c)-1
j = (0:1:N)
plt.subplot(3, 1, 2)

plt.plot(j/255,real(c)
/np.sqrt(N+1),j/255,-imag(c)/np.sqrt(N+1))
plt.xlim(0, 0.6)
plt.ylim(-2, 4)

plt.xlabel('j/255')
plt.legend(['real(c)/sqrt(N+1)', '-imag(c)/sqrt(N+1)'])
# The first zero of the FT
# is at 1/2d

# Fourier transform(inverse) of Fourier transform
z = ifft(c)
N = length(c)-1
k = (0:1:N)
# 1/(2*d)=0.025

plt.subplot(3, 1, 3)

plt.plot(i,real(z)
,i,imag(z))
plt.xlim(0, 300)
plt.ylim(-0.5, 1.5)

plt.xlabel('i')
plt.legend(['real(z)', 'imag(z)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% F2FTSTEPDS
% The real FT is used.
% Fourier transform of DOUBLE SIDED step function of width 0 to d.

function F2FTSTEPDS;
% Original Function
i = (0:1:255);
d = 20;
nx = length(i);
x = (logical(i)>=0) - (logical(i-d)>=0) + (logical(i-255+d)>=0);

figure(1);
subplot(3,1,1);
plot(i/255,real(x),i/255,imag(x));
axis([0 1 -0.5 1.5]);
xlabel('i/255');
legend('real(x)','imag(x)');

%Fourier transform
c = fft(x);
%N = 128
N = length(c)-1;
j = (0:1:N);

subplot(3,1,2);
plot(j/255,real(c)/sqrt(N+1),j/255,-imag(c)/sqrt(N+1));
axis([0 0.6 -2 4]);
xlabel('j/255');
legend('real(c)/sqrt(N+1)','-imag(c)/sqrt(N+1)');


% The first zero of the FT
% is at 1/2d

%Fourier transform(inverse) of Fourier transform
z = ifft(c);
N = length(c)-1;
k = (0:1:N);

% 1/(2*d)=0.025

subplot(3,1,3);
plot(i,real(z),i,imag(z));
axis([0 300 -0.5 1.5]);
xlabel('i');
legend('real(z)','imag(z)');`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'of',
    title: "of - F2FTSTEPDS\r",
    description: "F2FTSTEPDS\r",
    category: "Optics - Fourier Transform",
    chapter: '9',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# F2FTSTEPDS
# The complex FT is used.
# Fourier transform of SINGLE SIDED step function of width 0 to d.


# Original Function
i = np.arange(0, 255+1, 1)
d = 20
nx = length(i)
x = (logical(i)>=0) - (logical(i-d)>=0)
fig = plt.figure(1)

plt.subplot(3, 1, 1)

plt.plot(i,real(x)
,i,imag(x))
plt.xlim(0, 300)
plt.ylim(-0.5, 1.5)

plt.xlabel('i')
plt.legend(['real(x)', 'imag(x)'])
# Fourier transform
c = fft(x)
# N = 128
N = length(c)-1
j = (0:1:N)
plt.subplot(3, 1, 2)

plt.plot(j/255,real(c)
/np.sqrt(N+1),j/255,-imag(c)/np.sqrt(N+1))
plt.xlim(0, 1)
plt.ylim(-1, 2)

plt.xlabel('j/255')
plt.legend(['real(c)/sqrt(N+1)', '-imag(c)/sqrt(N+1)'])
# The first zero of the FT
# is at 1/2d

# Fourier transform(inverse) of Fourier transform
z = ifft(c)
N = length(c)-1
k = (0:1:N)
# 1/(2*d)=0.025

plt.subplot(3, 1, 3)

plt.plot(i,real(z)
,i,imag(z))
plt.xlim(0, 300)
plt.ylim(-0.5, 1.5)

plt.xlabel('i')
plt.legend(['real(z)', 'imag(z)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% F2FTSTEPDS
% The complex FT is used.
% Fourier transform of SINGLE SIDED step function of width 0 to d.

function F3DTSTEPC1S;
% Original Function
i = (0:1:255);
d = 20;
nx = length(i);
x = (logical(i)>=0) - (logical(i-d)>=0);

figure(1);
subplot(3,1,1);
plot(i,real(x),i,imag(x));
axis([0 300 -0.5 1.5]);
xlabel('i');
legend('real(x)','imag(x)');

%Fourier transform
c = fft(x);
%N = 128
N = length(c)-1;
j = (0:1:N);

subplot(3,1,2);
plot(j/255,real(c)/sqrt(N+1),j/255,-imag(c)/sqrt(N+1));
axis([0 1 -1 2]);
xlabel('j/255');
legend('real(c)/sqrt(N+1)','-imag(c)/sqrt(N+1)');

% The first zero of the FT
% is at 1/2d

%Fourier transform(inverse) of Fourier transform
z = ifft(c);
N = length(c)-1;
k = (0:1:N);

% 1/(2*d)=0.025

subplot(3,1,3);
plot(i,real(z),i,imag(z));
axis([0 300 -0.5 1.5]);
xlabel('i');
legend('real(z)','imag(z)');`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'of',
    title: "of - F4FTSTEPOSS\r",
    description: "F4FTSTEPOSS\r",
    category: "Optics - Fourier Transform",
    chapter: '9',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# F4FTSTEPOSS
# The complex FT is used.
# Fourier transform of DOUBLE SIDED step function of width 0 to d.


# Original Function
i = np.arange(0, 255+1, 1)
d = 20
nx = length(i)
x = (logical(i)>=0) - (logical(i-d)>=0) + (logical(i-255+d)>=0)
fig = plt.figure(1)

plt.subplot(3, 1, 1)

plt.plot(i,real(x)
,i,imag(x))
plt.xlim(0, 300)
plt.ylim(-0.5, 1.5)

plt.legend(['real(x)', 'imag(x)'])
plt.xlabel('i')
# Fourier transform
c = fft(x)
# N = 128
N = length(c)-1
j = (0:1:N)
plt.subplot(3, 1, 2)

plt.plot(j/255,real(c)
/np.sqrt(N+1),j/255,-imag(c)/np.sqrt(N+1))
plt.xlim(0, 1)
plt.ylim(-2, 4)

plt.xlabel('j/255')
plt.legend(['real(c)/sqrt(N+1)', '-imag(z)/sqrt(N+1)'])
# The first zero of the FT
# is at 1/2d

# Fourier transform(inverse) of Fourier transform
z = ifft(c)
N = length(c)-1
k = (0:1:N)
# 1/(2*d)=0.025

plt.subplot(3, 1, 3)

plt.plot(i,real(z)
,i,imag(z))
plt.xlim(0, 300)
plt.ylim(-0.5, 1.5)

plt.xlabel('i')
plt.legend(['real(z)', 'imag(z)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% F4FTSTEPOSS
% The complex FT is used.
% Fourier transform of DOUBLE SIDED step function of width 0 to d.

function F4FTSTEPOSS;
% Original Function
i = (0:1:255);
d = 20;
nx = length(i);
x = (logical(i)>=0) - (logical(i-d)>=0) + (logical(i-255+d)>=0);

figure(1);
subplot(3,1,1);
plot(i,real(x),i,imag(x));
axis([0 300 -0.5 1.5]);
legend('real(x)','imag(x)');
xlabel('i');

%Fourier transform
c = fft(x);
%N = 128
N = length(c)-1;
j = (0:1:N);

subplot(3,1,2);
plot(j/255,real(c)/sqrt(N+1),j/255,-imag(c)/sqrt(N+1));
axis([0 1 -2 4]);
xlabel('j/255');
legend('real(c)/sqrt(N+1)','-imag(z)/sqrt(N+1)');

% The first zero of the FT
% is at 1/2d

%Fourier transform(inverse) of Fourier transform
z = ifft(c);
N = length(c)-1;
k = (0:1:N);

% 1/(2*d)=0.025

subplot(3,1,3);
plot(i,real(z),i,imag(z));
axis([0 300 -0.5 1.5]);
xlabel('i');
legend('real(z)','imag(z)');
`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'of',
    title: "of - F5FTSINCRS\r",
    description: "F5FTSINCRS\r",
    category: "Optics - Fourier Transform",
    chapter: '9',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# F5FTSINCRS
# The real FT is used.
# Fourier transform of sinz/z function of width 0 to d


# Original Function
i = np.arange(0, 255+1, 1)
d = 40
x = np.sin(2*np.pi*d*(i/255))/(2*np.pi*d*(i/255))
x(1) = 0
nx = length(i)
fig = plt.figure(1)

plt.subplot(3, 1, 1)

plt.plot(i,real(x)
,i,imag(x))
plt.xlim(0, 300)
plt.ylim(-0.5, 1.5)

plt.xlabel('i')
plt.legend(['real(x)', 'imag(x)'])
# Fourier transform
c = fft(x)
# N = 128
N = length(c)-1
j = (0:1:N)
plt.subplot(3, 1, 2)

plt.plot(j/255,real(c)
/np.sqrt(N+1),j/255,-imag(c)/np.sqrt(N+1))
plt.xlim(0, 0.6)
plt.ylim(-0.1, 0.3)

plt.xlabel('j/255')
plt.legend(['real(c)/sqrt(N+1)', '-imag(c)/sqrt(N+1)'])
# The first zero of the FT
# is at 1/2d

# Fourier transform(inverse) of Fourier transform
z = ifft(c)
N = length(c)-1
k = (0:1:N)
# 1/(2*d)=0.013

plt.subplot(3, 1, 3)

plt.plot(i,real(z)
,i,imag(z))
plt.xlim(0, 300)
plt.ylim(-0.5, 1.5)

plt.xlabel('i')
plt.legend(['real(z)', 'imag(z)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% F5FTSINCRS
% The real FT is used.
% Fourier transform of sinz/z function of width 0 to d

function F5FTSINCRS;
% Original Function
i = (0:1:255);
d = 40;
x = sin(2*pi*d*(i/255))./(2*pi*d*(i/255));
x(1) = 0;
nx = length(i);


figure(1);
subplot(3,1,1);
plot(i,real(x),i,imag(x));
axis([0 300 -0.5 1.5]);
xlabel('i');
legend('real(x)','imag(x)');

%Fourier transform
c = fft(x);
%N = 128
N = length(c)-1;
j = (0:1:N);

subplot(3,1,2);
plot(j/255,real(c)/sqrt(N+1),j/255,-imag(c)/sqrt(N+1));
axis([0 0.6 -0.1 0.3]);
xlabel('j/255');
legend('real(c)/sqrt(N+1)','-imag(c)/sqrt(N+1)');

% The first zero of the FT
% is at 1/2d

%Fourier transform(inverse) of Fourier transform
z = ifft(c);
N = length(c)-1;
k = (0:1:N);

% 1/(2*d)=0.013

subplot(3,1,3);
plot(i,real(z),i,imag(z));
axis([0 300 -0.5 1.5]);
xlabel('i');
legend('real(z)','imag(z)');`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'of',
    title: "of - F6FTSINCCS\r",
    description: "F6FTSINCCS\r",
    category: "Optics - Fourier Transform",
    chapter: '9',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# F6FTSINCCS
# The complex FT is used.
# Fourier transform of sinz/z function of width 0 to d


# Original Function
i = np.arange(0, 255+1, 1)
d = 20
x = np.sin(2*np.pi*d*(i/255))/(2*np.pi*d*(i/255))
x(1) = 0
nx = length(i)
fig = plt.figure(1)

plt.subplot(3, 1, 1)

plt.plot(i/255,real(x)
,i/255,imag(x))
plt.xlim(0, 1)
plt.ylim(-0.5, 1.5)

plt.xlabel('i/255')
plt.legend(['real(x)', 'imag(x)'])
# Fourier transform
c = fft(x)
# N = 128
N = length(c)-1
j = (0:1:N)
plt.subplot(3, 1, 2)

plt.plot(j/255,real(c)
/np.sqrt(N+1),j/255,-imag(c)/np.sqrt(N+1))
plt.xlim(0, 1)
plt.ylim(-0.5, 0.5)

plt.xlabel('j/255')
plt.legend(['real(c)/sqrt(N+1)', '-imag(z)/sqrt(N+1)'])
# The first zero of the FT
# is at 1/2d

# Fourier transform(inverse) of Fourier transform
z = ifft(c)
N = length(c)-1
k = (0:1:N)
# 1/(2*d)=0.025

plt.subplot(3, 1, 3)

plt.plot(i,real(z)
,i,imag(z))
plt.xlim(0, 300)
plt.ylim(-0.5, 1.5)

plt.xlabel('i')
plt.legend(['real(z)', 'imag(z)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% F6FTSINCCS
% The complex FT is used.
% Fourier transform of sinz/z function of width 0 to d

function F6FTSINCCS;
% Original Function
i = (0:1:255);
d = 20;
x = sin(2*pi*d*(i/255))./(2*pi*d*(i/255));
x(1) = 0;
nx = length(i);


figure(1);
subplot(3,1,1);
plot(i/255,real(x),i/255,imag(x));
axis([0 1 -0.5 1.5]);
xlabel('i/255');
legend('real(x)','imag(x)');

%Fourier transform
c = fft(x);
%N = 128
N = length(c)-1;
j = (0:1:N);

subplot(3,1,2);
plot(j/255,real(c)/sqrt(N+1),j/255,-imag(c)/sqrt(N+1));
axis([0 1 -0.5 0.5]);
xlabel('j/255');
legend('real(c)/sqrt(N+1)','-imag(z)/sqrt(N+1)');

% The first zero of the FT
% is at 1/2d

%Fourier transform(inverse) of Fourier transform
z = ifft(c);
N = length(c)-1;
k = (0:1:N);

% 1/(2*d)=0.025

subplot(3,1,3);
plot(i,real(z),i,imag(z));
axis([0 300 -0.5 1.5]);
xlabel('i');
legend('real(z)','imag(z)');`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'of',
    title: "of - F7FTSTEP183S\r",
    description: "F7FTSTEP183S\r",
    category: "Optics - Fourier Transform",
    chapter: '9',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# F7FTSTEP183S
# Complex Fourier transform of step function of width 0 to d.
# 183 points are used. The FT(inverse) of the FT is also shown.


# Original Function
i = np.arange(0, 183+1, 1)
d = 20
x = (logical(i)>=0) - (logical(i-d)>=0)
nx = length(i)
fig = plt.figure(1)

plt.subplot(3, 1, 1)

plt.plot(i,real(x)
,i,imag(x))
plt.xlim(0, 200)
plt.ylim(-0.5, 1.5)

plt.xlabel('i')
plt.legend(['real(x)', 'imag(x)'])
# Fourier transform
c = fft(x)
# N = 128
N = length(c)-1
j = (0:1:N)
plt.subplot(3, 1, 2)

plt.plot(j,real(c)
/np.sqrt(N+1),j,-imag(c)/np.sqrt(N+1))
plt.xlim(0, 200)
plt.ylim(-2, 2)

plt.xlabel('j')
plt.legend(['real(c)/sqrt(N+1)', '-imag(z)/sqrt(N+1)'])
# The first zero of the FT
# is at 1/2d

# Fourier transform(inverse) of Fourier transform
z = ifft(c)
N = length(c)-1
k = (0:1:N)
# 1/(2*d)=0.025

plt.subplot(3, 1, 3)

plt.plot(i,real(z)
,i,imag(z))
plt.xlim(0, 200)
plt.ylim(-0.5, 1.5)

plt.xlabel('i')
plt.legend(['real(z)', 'imag(z)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% F7FTSTEP183S
% Complex Fourier transform of step function of width 0 to d.
% 183 points are used. The FT(inverse) of the FT is also shown.

function F7FTSTEP183S;
% Original Function
i = (0:1:183);
d = 20;
x = (logical(i)>=0) - (logical(i-d)>=0)
nx = length(i);


figure(1);
subplot(3,1,1);
plot(i,real(x),i,imag(x));
axis([0 200 -0.5 1.5]);
xlabel('i');
legend('real(x)','imag(x)');

%Fourier transform
c = fft(x);
%N = 128
N = length(c)-1;
j = (0:1:N);

subplot(3,1,2);
plot(j,real(c)/sqrt(N+1),j,-imag(c)/sqrt(N+1));
axis([0 200 -2 2]);
xlabel('j');
legend('real(c)/sqrt(N+1)','-imag(z)/sqrt(N+1)');
% The first zero of the FT
% is at 1/2d

%Fourier transform(inverse) of Fourier transform
z = ifft(c);
N = length(c)-1;
k = (0:1:N);

% 1/(2*d)=0.025

subplot(3,1,3);
plot(i,real(z),i,imag(z));
axis([0 200 -0.5 1.5]);
xlabel('i');
legend('real(z)','imag(z)');`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'of',
    title: "of - F8FTSINC183S\r",
    description: "F8FTSINC183S\r",
    category: "Optics - Fourier Transform",
    chapter: '9',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# F8FTSINC183S
# Fourier transform of sinz/z function of width 0 to d
# The FT (inverse) of the FT is also shown


# Original Function
i = np.arange(0, 183+1, 1)
d = 20
x = np.sin(2*np.pi*d*(i/255))/(2*np.pi*d*(i/255))
x(1) = 0
nx = length(i)
fig = plt.figure(1)

plt.subplot(3, 1, 1)

plt.plot(i/255,real(x)
,i/255,imag(x))
plt.xlim(0, 0.8)
plt.ylim(-0.5, 1.5)

plt.xlabel('i/255')
plt.legend(['real(x)', 'imag(x)'])
# Fourier transform
c = fft(x)
# N = 183
N = length(c)-1
j = (0:1:N)
plt.subplot(3, 1, 2)

plt.plot(j/255,real(c)
/np.sqrt(N+1),j/255,-imag(c)/np.sqrt(N+1))
plt.xlim(0, 0.8)
plt.ylim(-0.5, 0.5)

plt.xlabel('j/255')
plt.legend(['real(c)/sqrt(N+1)', '-imag(c)/sqrt(N+1)'])
# The first zero of the FT
# is at 1/2d

# Fourier transform(inverse) of Fourier transform
z = ifft(c)
N = length(c)-1
k = (0:1:N)
# 1/(2*d)=0.025

plt.subplot(3, 1, 3)

plt.plot(i,real(z)
,i,imag(z))
plt.xlim(0, 200)
plt.ylim(-0.5, 1.5)

plt.xlabel('i')
plt.legend(['real(z)', 'imag(z)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% F8FTSINC183S
% Fourier transform of sinz/z function of width 0 to d
% The FT (inverse) of the FT is also shown

function F8FTSINC183S;
% Original Function
i = (0:1:183);
d = 20;
x = sin(2*pi*d*(i/255))./(2*pi*d*(i/255));
x(1) = 0;
nx = length(i);


figure(1);
subplot(3,1,1);
plot(i/255,real(x),i/255,imag(x));
axis([0 0.8 -0.5 1.5]);
xlabel('i/255');
legend('real(x)','imag(x)');

%Fourier transform
c = fft(x);
%N = 183
N = length(c)-1;
j = (0:1:N);

subplot(3,1,2);
plot(j/255,real(c)/sqrt(N+1),j/255,-imag(c)/sqrt(N+1));
axis([0 0.8 -0.5 0.5]);
xlabel('j/255');
legend('real(c)/sqrt(N+1)','-imag(c)/sqrt(N+1)');

% The first zero of the FT
% is at 1/2d

%Fourier transform(inverse) of Fourier transform
z = ifft(c);
N = length(c)-1;
k = (0:1:N);

% 1/(2*d)=0.025

subplot(3,1,3);
plot(i,real(z),i,imag(z));
axis([0 200 -0.5 1.5]);
xlabel('i');
legend('real(z)','imag(z)');`,
    cCode: ``,
    defaultParams: {}
  },
  {
    id: 'for',
    title: "for - F9FTGAUSS\r",
    description: "F9FTGAUSS\r",
    category: "Optics - Fourier Transform",
    chapter: '9',
    source: 'matlab',
    pythonCode: `import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# F9FTGAUSS
# Complex Fourier transformation of Gauss function for two values of a
# and for Fast Fourier Transformation.
# The maximum is at i = 0. The FT (inverse) of the FT is also calculated.

i = np.arange(0, 255+1, 1)
A = 1
a = 100
aa = 50
y1 = A*np.exp(-a*((i/255)**2))
y2 = A*np.exp(-aa*((i/255)**2))
fig = plt.figure(1)

plt.subplot(3, 1, 1)

plt.plot(i/255,y1,i/255,y2)

plt.xlim(0, 1)
plt.ylim(0, 1)

plt.xlabel('i/255')
plt.legend(['y1', 'y2'])

c1 = fft(y1)
c2 = fft(y2)
N = length(c2)-1; # N=255
j=(0:1:N)
plt.subplot(3, 1, 2)

plt.plot(j,real(c1)
/np.sqrt(N+1),j,real(c2)/np.sqrt(N+1))
plt.xlim(0, 300)
plt.ylim(0, 3)

plt.xlabel('j')
plt.legend(['real(c1)/sqrt(N+1)', 'real(c2)/sqrt(N+1)'])
zf1 = ifft(c1)
zf2 = ifft(c2)
N2 = length(zf2)-1
i = (0:1:N2)
# 1/(2*d)=0.025

plt.subplot(3, 1, 3)

plt.plot(i/255,zf1,i/255,zf2)

plt.xlim(0, 0.4)
plt.ylim(0, 1)

plt.xlabel('i/255')
plt.legend(['zf1', 'zf2'])
# The coordinate is again i/255


# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,
    matlabCode: `% F9FTGAUSS
% Complex Fourier transformation of Gauss function for two values of a
% and for Fast Fourier Transformation.
% The maximum is at i = 0. The FT (inverse) of the FT is also calculated.
function F9FTGAUSS;
i = (0:1:255);
A = 1;
a = 100;
aa = 50;
y1 = A*exp(-a*((i/255).^2));
y2 = A*exp(-aa*((i/255).^2));

figure(1);
subplot(3,1,1);
plot(i/255,y1,i/255,y2);
axis([0 1 0 1]);
xlabel('i/255');
legend('y1','y2');

c1 = fft(y1);
c2 = fft(y2);
N = length(c2)-1; % N=255
j=(0:1:N);

subplot(3,1,2);
plot(j,real(c1)/sqrt(N+1),j,real(c2)/sqrt(N+1));
axis([0 300 0 3]);
xlabel('j');
legend('real(c1)/sqrt(N+1)','real(c2)/sqrt(N+1)');

zf1 = ifft(c1);
zf2 = ifft(c2);


N2 = length(zf2)-1;
i = (0:1:N2);
% 1/(2*d)=0.025

subplot(3,1,3);
plot(i/255,zf1,i/255,zf2);
axis([0 0.4 0 1]);
xlabel('i/255');
legend('zf1','zf2');
% The coordinate is again i/255

`,
    cCode: ``,
    defaultParams: {}
  }
]
