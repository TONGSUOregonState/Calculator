% I10WEDGES
% Fringes of a wedge given by y.
function I10WEDGES;
% The distance is given by yy;
global Alpha;
Alpha = 0.002;
Lamda1 = 0.0005;
Lamda2 = 0.0008;
Lamda3 = 0.0012;
x = (0:0.01:1);
y1 = y(x,Lamda1);
y2 = y(x,Lamda2);
y3 = y(x,Lamda3);

figure(1);
subplot(2,1,1);
plot(x,y1,x,y2,x,y3);
axis([0 1 0 1]);
xlabel('x');
legend('y1(x,\lambda1)','y2(x,\lambda2)','y3(x,\lambda3)')

% Height at x
h = x*tan(Alpha);

subplot(3,2,5);
plot(x,h);
axis([0 1 0 0.003]);
xlabel('x');
legend('h(x)');

% Distance between two Maxima depending on ? xx = ?/(2 tan ?)

Lamda = (0.0001:0.0001:0.0015);
xx = Lamda/(2*tan(Alpha));

subplot(3,2,6);
plot(Lamda,xx);
axis([0 0.0015 0 0.4]);
xlabel('\lambda');
legend('xx(\lambda)');


function Out=y(x,Lamda)
global Alpha;
Out = cos(2*pi*x*(tan(Alpha)/Lamda)+pi/2).^2;
