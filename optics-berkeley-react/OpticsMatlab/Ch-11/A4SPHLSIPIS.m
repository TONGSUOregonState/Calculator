% A4SPHLSIPIS

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

