% D2FASLITS
% Diffraction on a slit of width d at wavelength ????.
% X is distance: Slit-Screen,
% Y is coordinate on Screen.
% For small angles, Y/X is proportional to the diffraction angle ?.
% All length in mm.
% MCAD notice the singularity at 0. for the graph we get around it using
% the range Y = -100.1, -99.1 to 100.1
% Three slits with different width d1, d2, and d3

function D2FASLITS;
d1 = 0.08;
d2 = 0.12;
d3 = 0.16;
X = 4000; %nu
Lamda = 0.0005;
Theta = (-2:0.01:2);
I1 = (sin(pi*(d1/Lamda)*sin((2*pi/360)*Theta))./(pi*(d1/Lamda)*(2*pi/360)*Theta) ).^2;
I2 = (sin(pi*(d2/Lamda)*sin((2*pi/360)*Theta))./(pi*(d2/Lamda)*(2*pi/360)*Theta) ).^2;
I3 = (sin(pi*(d3/Lamda)*sin((2*pi/360)*Theta))./(pi*(d3/Lamda)*(2*pi/360)*Theta) ).^2;

figure(1);
plot(Theta,I1,Theta,I2,Theta,I3);
axis([-1 1 0 1]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('I1(\theta)','I2(\theta)','I3(\theta)');
