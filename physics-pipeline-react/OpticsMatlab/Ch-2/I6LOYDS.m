% I6LOYDS
% Lloyd's mirror experiment

function I6LOYDS;
Con = 1;
% All length in mm
a = 0.4;
X = 4000;
Lamda = 0.0005;
Y = (-10:0.1:10);

I = Con*(cos(pi*((Y*a)/(Lamda*X)+pi/2)).^2);

figure(1);
plot(Y,I);
axis([-10 10 0 1]);
xlabel('Y');
legend('I(Y)');

% We see that at Y=0 Young's experiment has a maximum, Lloyd's a minimum.
% For Young and Lloyd: The position of maxima are changed by changing d and ?, X is
% considered fixed.