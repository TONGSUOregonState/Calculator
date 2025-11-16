% I5YOUNGS
% Young's Experiment

function I5YOUNGS;

Con = 1;
Lamda = 0.0005;
a = 0.4;
X = 4000;
Y = (-10:0.1:10); % All length in mm
I = Con*(cos(pi*((Y*a)/(Lamda*X))).^2);

figure(1);
plot(Y,I);
axis([-10 10 0 1]);
xlabel('Y');
legend('I(Y)');
