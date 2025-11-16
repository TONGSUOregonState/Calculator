% D6FARONS
% Diffraction on a round aperture of radius a, using wavelength ?.
% The graph is not normalized.
% X is distace:Slit-Screen,
% R is coordinate on Screen,
% All length in mm, parameters are globally defined above the graph.
% Three round apertures with different Radii a1, a2, and a3

function D6FARONS;

R = (-10.01:0.1:10.01);
X = 1000;
Lamda = 0.010;
a1 = 1.5;
a2 = 3;
a3 = 6;

I1 = (besselj(1,(2*pi*a1*R/(Lamda*X)))./(2*pi*a1*R/(Lamda*X))).^2;
I2 = (besselj(1,(2*pi*a2*R/(Lamda*X)))./(2*pi*a2*R/(Lamda*X))).^2;
I3 = (besselj(1,(2*pi*a3*R/(Lamda*X)))./(2*pi*a3*R/(Lamda*X))).^2;

figure(1);
plot(R,I1,R,I2,R,I3);
axis([-15 10 0 0.3]);                  % PLOTS LIMITS                    
xlabel('R');
legend('I1(R)','I2(R)','I3(R)');
