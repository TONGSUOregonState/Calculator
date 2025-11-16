% G32RESGG
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
