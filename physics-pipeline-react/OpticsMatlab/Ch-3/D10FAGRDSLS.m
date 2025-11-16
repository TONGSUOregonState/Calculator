% D10FAGRDSLS
% Diffraction on an amplitude grating at normal incidence.
% Width of openings d, center to center distance of strips a, wavelength ????, distance
% from grating to screen X and coordinate on Screen Y.
% All distances and wavelength in mm, number of lines N.
% All parameters are globally defined above the graph.
% D(A) is the diffraction factor
% I(A) is the interference factor, normalized to 1.
% P(A) is the product of interference and diffraction factor.

function D10FAGRDSLS;

Y = (-800:0.1:800);
X = 4000;
d = 0.02;
Lamda = 0.0005;
a = 0.2;
N = 2;
D = (sin(pi*(d/Lamda)*(Y/X))./(pi*(d/Lamda)*(Y/X))).^2;
I = (sin(pi*(a/Lamda)*(Y/X)*N)./(N*sin(pi*(a/Lamda)*(Y/X)))).^2;
P = D.*I;

figure(1);
plot(Y,D,Y,P);
axis([-600 600 0 1]);                  % PLOTS LIMITS                    
xlabel('Y');
legend('D(Y)','P(Y)');

