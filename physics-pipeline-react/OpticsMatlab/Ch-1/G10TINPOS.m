% G10TINPOS

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

