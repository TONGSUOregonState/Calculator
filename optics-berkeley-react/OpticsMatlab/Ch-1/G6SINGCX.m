% G6SINGCX

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
legend('xxxi(xxxo)');