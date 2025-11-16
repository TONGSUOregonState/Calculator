% L2BBLS
% 1. Black body Radiation. Graph of f(x) =dL/d?, and x =?
% 2. Integration over the wavelength range from 3*10^-6 to 3*10^-5 meters to obtain the
% Radiance.
% 3. Multiplication with area times solid angle to obtain the Radiant energy.

% 1. Black body Radiation. Graph of dL/d????
% Constants for wavelength dependence
function L2BBLS;
global c1 c2 T;
c2 = 1.43e-2;
c1 = 1.18e-16;
T = 1000;

x=(3e-5:-0.01e-5:1e-7); % x in meters
% Planck's Law depending on wavelength

figure(1);
plot(x,f(x));
axis([0 3e-5 0 5e9]);                  % PLOTS LIMITS                    
xlabel('x');
legend('f(x)');

R = quad(@f,3e-6,3e-5)
% Radiance  R = 1.316e4

% 3. Multiplication with area times solid angle to obtain the Radiant energy.
% Area A, Solid angle SA

A = 0.1;
SA = 4;

RR = A*SA*R  
% RR = 5.263e3 Watts

% RR has the same value as the corresponding value when integrating over frequency.


function Out = f(x) 
global c1 c2 T;
Out = c1./((x.^5).*(exp(c2./(x*T))-1));