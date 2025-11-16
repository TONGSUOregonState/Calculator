% G31MIRCV

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
