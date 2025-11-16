% D15FABAGRS

% Babinets Theorem. Diffraction on two amplitude gratings, one with width of
% openings d1, the other with width of opening d2, and both have center to center
% distance of strips a = d1 +d2.


% Diffraction pattern of the two complementary screens, one is a grating of width
% of opening d1 the other of d2, and the periodicity constant is a = d1 + d2
% Wavelength ?, distance from gratings to screen X and coordinate on
% screen Y. All distances and wavelength in mm, both have number of lines N .Normal
% incidence.

% D1 and D2 are the diffraction factors, I is the interference factor, normalized to 1.
% P(A) is the product of Interference and diffraction factor.

% We see that the intensity of the diffraction peaks is different for the two
% complementarypattern, but the position of the peaks is the same, and
% that is what Babinets Principle tells us.

function D15FABAGRS;

Theta = (-0.5001:0.0002:0.5); 
Lamda = 0.0005;
N = 6;

d1 = 0.002;
d2 = 0.001;
a = d1 + d2;


D1 = (sin(pi*(d1/Lamda)*sin(Theta))./(pi*(d1/Lamda)*sin(Theta))).^2;
D2 = (sin(pi*(d2/Lamda)*sin(Theta))./(pi*(d2/Lamda)*sin(Theta))).^2;

I = (sin(pi*(a/Lamda)*sin(Theta)*N)./(N*sin(pi*(a/Lamda)*sin(Theta)))).^2;

P1 = D1.*I;
P2 = D2.*I;

figure(1);
plot(Theta,P1,Theta,P2,Theta,D1,Theta,D2);
axis([-0.6 0.6 0 1]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('P1(\theta)','P2(\theta)','D1(\theta)','D2(\theta)');
