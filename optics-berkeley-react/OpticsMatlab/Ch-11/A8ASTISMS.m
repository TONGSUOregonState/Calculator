% A8ASTISMS
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
