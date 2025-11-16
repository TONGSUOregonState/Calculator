% D16FAGRRANS
% One dimensional periodic and random arrangement for interference and
% diffraction
% Diffraction on an amplitude grating with width of openings d, center to center
% distance of strips a, wavelength ?, distance from grating to screen X and coordinate on
% screen Y. All distances and wavelength in mm, number of lines N .Normal incidence.
% All parameters are globally defined above the graph.
% D(?) is the diffraction factor
% I(?) is the interference factor, normalized to 1.
% P1(?) is the product of interference and diffraction factor.
% P2(?) is for the case that the lines are not periodic and the interfernce factor averages
% to a constant.

function D16FAGRRANS;

Theta = (-1.001:0.0011:1.001);

d = 0.002;
Lamda = 0.0005;
a = 0.008;
N = 20;
C = 0.5;

D = (sin(pi*(d/Lamda)*sin(Theta))./(pi*(d/Lamda)*sin(Theta))).^2;
I = (sin(pi*(a/Lamda)*sin(Theta)*N)./(N*sin(pi*(a/Lamda)*sin(Theta)))).^2;

P1 = D.*I;
P2 = D.*C;

figure(1);
subplot(1,2,1);
plot(Theta,P1);
axis([-1.5 1.5 0 1]);
xlabel('\theta');
legend('P1(\theta)');

subplot(1,2,2);
plot(Theta,P2);
axis([-1.5 1.5 0 0.5]);
xlabel('\theta');
legend('P2(\theta)');

