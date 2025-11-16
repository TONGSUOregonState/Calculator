% A6COMPLANS
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
Out = ((Rho.^2*tan(Beta))/(f^2))*(W(Rho)*Sigma+G(Rho)*pi);