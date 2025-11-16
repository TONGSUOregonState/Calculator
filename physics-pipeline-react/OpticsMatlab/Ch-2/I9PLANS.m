% I9PLANS

% Fringes of plane parallel plate produced by two waves

function I9PLANS;
% 1.For normal incidence depending on D
Lamda = 0.0005;
n2 = 1.5;
D = (-0.00051:0.00001:0.005);
I1 = cos((2*pi*D*n2)/Lamda + pi/2).^2;

figure(1);
subplot(2,1,1);
plot(D,I1);
axis([-0.001 0.005 0 1]);
xlabel('D');
legend('I1(D)');

% 2. For normal incidence depending on Lamda

LamdaLamda = (0.05:0.001:0.5);
DD = 0.05;
I2 = cos((2*pi*DD*(n2))./LamdaLamda + pi/2).^2;

subplot(2,1,2);
plot(LamdaLamda,I2);
axis([0 0.5 0 1]);
xlabel('\lambda\lambda');
legend('I2(\lambda\lambda)');