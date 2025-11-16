% A5COMAS

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
% CS = 1/3 CT