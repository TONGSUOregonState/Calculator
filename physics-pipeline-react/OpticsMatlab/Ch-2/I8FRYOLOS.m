% I8FRYOLOS
% Fresnel's mirror, Young's double slit, and Lloyd's mirror,
function I8FRYOLOS;
% 1. Fresnel's Mirror  
% Y, c, f, b, and ? in mm, ? in Radc
% is about b for calculation of X = c + f
% All length in mm
Con = 1;
b = 1000;
f = 5000;
Beta = 0.0002;
Lamda = 0.0005;
c = b*cos(Beta);
Y = (-10:0.1:10);

IF = Con*(cos(pi*((Y*2*(b/(c+f))*sin(Beta))/Lamda)).^2);

% 2. Young's Experiment
a = 0.4;
X = 4000;
IY = Con*(cos(pi*((Y*a)/(Lamda*X))).^2);

% 3. Lloyd's Mirror (same as Yound, phase term is added)
IL = Con*(cos(pi*((Y*a)/(Lamda*X))+pi/2).^2);

figure(1);
plot(Y,IF,Y,IY,Y,IL);
axis([-10 10 0 1]);
xlabel('Y');
legend('IF(Y)','IY(Y)','IL(Y)');


% We see that at Y=0 Young has a maximum, Lloyd a minimum
% For Young and Lloyd: The position of maxima are changed by changing d and ?, X is
% considered fixed.

% For Fresnel, a,b are fixed, position of fringes changes with ? and ?.


