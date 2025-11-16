% I4COSINTS
% Intensity in real and complex notation
% Real notation for maxima
function I4COSINTS;
x = (0:0.01:4);
Lamda = 1;
A = 1;
t = 1;
T = 10;
Delta = 0;
u = A*cos(2*pi*(x/Lamda-t/T)) +A*cos(2*pi*((x-Delta)/Lamda-t/T));

figure(1);
subplot(3,2,1);
plot(x,u);
axis([0 4 -2 2]);
xlabel('x');
legend('u(x)');

subplot(3,2,2);
plot(x,u.^2);
axis([0 4 0 4]);
xlabel('x');
legend('(u(x))^2');


% The time average of the intensity is 1/2 of the maximum value 4
t = 1;

% Complex notation
% i = sqrt(-1)
z = exp(i*2*pi*(x/Lamda-t/T))+A*exp(i*2*pi*((x-Delta)/Lamda-t/T));
% The real part of z(x) is real(z(x))
subplot(3,2,3);
plot(x,real(z));
axis([0 4 -2 2]);
xlabel('x');
legend('real(z(x))');

% The real part squared is (real(z(x)))^2

subplot(3,2,4);
plot(x,real(z).^2);
axis([0 4 0 4]);
xlabel('x');
legend('real(z(x))^2');

% When taking z time z*, the time dependence is automatically eliminated and we get
% twice of the average value.

subplot(3,2,5);
plot(x,z.*conj(z));
axis([0 4 3.995 4.005]);
xlabel('x');
legend('z(x)*conj(z(x))');

% Complex notation and dependance on the optical path difference DeltaDelta
x = 1;
DeltaDelta = (0:0.01:5);
zz = exp(i*2*pi*(x/Lamda-t/T))+A*exp(i*2*pi*((x-DeltaDelta)/Lamda-t/T));

subplot(3,2,6);
plot(DeltaDelta,zz.*conj(zz));
axis([0 6 0 4]);
xlabel('\delta\delta');
legend('zz(\delta\delta)*conj(zz(\delta\delta))');
% We see the "fringe pattern"