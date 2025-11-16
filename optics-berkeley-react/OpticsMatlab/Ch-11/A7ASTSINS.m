% A7ASTSINS

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
legend('ASD(\phi)');