% I11NEWTONS
% Newton's rings
% Path difference d=(R -SQ(R^2-r^2))

% R is radius of curvature of the lens in mm
% r is the distance from the center in mm

function I11NEWTONS;
r = (0:0.01:4);
R = 2000;
Lamda = 0.0005;
d = R-sqrt(R^2-r.^2);
INR = cos(2*pi*(d/Lamda)+pi/2).^2;
INT = cos(2*pi*(d/Lamda)).^2;

figure(1);
subplot(2,1,1);
plot(r,INT);
axis([0 4 0 1]);
xlabel('r');
legend('INT(r)');

subplot(2,1,2);
plot(r,INR);
axis([0 4 0 1]);
xlabel('r');
legend('INR(r)');
