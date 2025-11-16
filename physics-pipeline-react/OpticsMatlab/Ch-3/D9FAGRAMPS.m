% D9FAGRAMPS
% Diffraction on an amplitude grating at normal incidence.
% Width of openings d, center to center distance of strips a, wavelength ????, distance
% from grating to screen X and coordinate on Screen Y.
% All distances and wavelength in mm, number of lines N.
% All parameters are globally defined above the graph.
% D(A) is the diffraction factor
% I(A) is the interference factor, normalized to 1. The numerator is plotted separately to
% show where the main maxima are located (0/0).
% P(A) is the product of Interference and diffraction factor.

function D9FAGRAMPS;

Theta = (-0.5001:0.0002:0.5);
d= 0.001;
Lamda = 0.0005;
a = 0.002;
N = 6;

D = (sin(pi*(d/Lamda)*sin(Theta))./(pi*(d/Lamda)*sin(Theta))).^2;
I = (sin(pi*(a/Lamda)*sin(Theta)*N)./(N*sin(pi*(a/Lamda)*sin(Theta)))).^2;
Y = (sin(pi*(a/Lamda).*sin(Theta)*N)).^2;
P = D.*I;


figure(1);
subplot(2,1,1);
plot(Theta,I,Theta,Y);
axis([-0.6 0.6 0 1]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('I(\theta)','Y(\theta)');


subplot(2,1,2);
plot(Theta,I,Theta,D,Theta,P);
axis([-0.6 0.6 0 1]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('I(\theta)','D(\theta)','P(\theta)');
