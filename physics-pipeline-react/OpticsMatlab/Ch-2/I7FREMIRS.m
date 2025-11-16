% I7FREMIRS
% Fresnel's mirror
function I7FREMIRS;
% 1. Fresnel's Mirror
% Y, c, f, b, and ? in mm, ? in Radc
% is about b for calculation of X = c + f
% All length in mm
Con = 1;
b = 1000;
f = 5000;
Beta = 0.0002;
Lamda = 0.0005;
c = b * cos(Beta);
Y = (-10:0.1:10);
I = Con*(cos(pi*((Y*2*(b/(c+f))*sin(Beta))/Lamda)).^2);

figure(1);
plot(Y,I);
axis([-10 10 0 1]);
xlabel('Y');
legend('I(Y)');

