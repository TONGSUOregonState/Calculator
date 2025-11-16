% G30MIRCV

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
