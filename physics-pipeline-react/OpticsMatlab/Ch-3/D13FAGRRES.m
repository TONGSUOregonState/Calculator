% D13FAGRRES
% Two diffraction pattern of a grating to study resolution.

% Diffraction on an amplitude grating with width of openings d, center to center
% distance of strips a, wavelength ?, distance from grating to screen X and
% coordinate on screen Y.
% All distances and wavelength in mm, number of lines N. Normal incidence.
% All parameters are globally defined above the graph.
% P(A) is the product of interference and diffraction factor.
% The resolution is given as ?/?? = N and introduced in the formulas of the
% second grating.

function D13FAGRRES;

Theta = (-0.7001:0.0002:0.7);
d = 0.0001;
Lamda = 0.0005;
LamdaLamda = 0.0006;
a = 0.002;
N = 6;


D = (sin(pi*(d/Lamda)*sin(Theta))./(pi*(d/Lamda)*sin(Theta))).^2;
DD = (sin(pi*(d/LamdaLamda)*sin(Theta))./(pi*(d/LamdaLamda)*sin(Theta))).^2;

I= (sin(pi*(a/Lamda)*sin(Theta)*N)./(N*sin(pi*(a/Lamda)*sin(Theta)))).^2;
II= (sin(pi*(a/LamdaLamda)*sin(Theta)*N)./(N*sin(pi*(a/LamdaLamda)*sin(Theta)))).^2;

P = D.*I;
PP = DD.*II;

figure(1);
plot(Theta,P,Theta,PP);
axis([-0.8 0.8 0 1]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('P(\theta)','PP(\theta)');

