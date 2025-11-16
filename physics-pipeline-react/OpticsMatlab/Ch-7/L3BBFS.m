% L3BBFS

% 1. Black body Radiation. Graph of f(?) = dL/d?, ? is frequency
% 2. Integration over the wavelength range from 10^14 to 3*10^13 1/s to obtain the
% Radiance.
% 3. Multiplication with area times solid angle to obtain the Radiant energy.

% Constants for frequency dependence

function L3BBFS;
global c3 c4 T;
c4 = 4.78e-11;
c3 = 1.47e-50;
T = 1000;

v=(5e14:-0.01e14:1e12);
% Planck's Law depending on frequency

figure(1);
plot(v,f(v));
axis([0 5e14 0 2e-10]);                  % PLOTS LIMITS                    
xlabel('v');
legend('f(v)');

R = quad(@f,1e13,1e14)
% Radiance  R = 1.316e4 Watts

% 3. Multiplication with area times solid angle to obtain the Radiant energy.
% Area A, Solid angle SA

A = 0.1;
SA = 4;

RR = A*SA*R  
% RR = 5.263e3 Watts

% RR has the same value as the corresponding value when integrating over wavelength.
function Out = f(v) 
global c3 c4 T;
Out = (c3./(exp(c4*v/T)-1)).*(v.^3);