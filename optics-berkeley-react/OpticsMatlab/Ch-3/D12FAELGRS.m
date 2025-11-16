% D12FAELGRS

% Diffraction on an echelette grating.
% The graphs for three different values of ?.

% D(?) is the diffraction factor, I(?) the interfference factor, and P(?) the product.
% The angle in radians of the echelle is ?.Diffraction angle ? in radians,
% wavelength ?, width of openings d, and separation of openings a in mm.
% N is the number of lines.
% All parameters are defined globally above the graph.

function D12FAELGRS;

Theta = (-1.301:0.002:1.3);
Epsilon1 = -0.25;
Epsilon2 = 0.25;
Epsilon3 = -0.52;

d = 37;
Lamda = 10;
a = 40;
N = 20;

D1 = (sin(pi*(d/Lamda)*sin(Theta + Epsilon1))./(pi*(d/Lamda)*sin(Theta+Epsilon1))).^2;
D2 = (sin(pi*(d/Lamda)*sin(Theta + Epsilon2))./(pi*(d/Lamda)*sin(Theta+Epsilon2))).^2;
D3 = (sin(pi*(d/Lamda)*sin(Theta + Epsilon3))./(pi*(d/Lamda)*sin(Theta+Epsilon3))).^2;

I = (sin(pi*a*sin(Theta)*N/Lamda)./(N*sin(pi*a*sin(Theta)/Lamda))).^2;

P1 = D1.*I;
P2 = D2.*I;
P3 = D3.*I;

figure(1);
subplot(3,1,1);
plot(Theta,D1,Theta,I,Theta,P1);
axis([-1.5 1.5 0 1]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('D1(\theta)','I(\theta)','P1(\theta)');


subplot(3,1,2);
plot(Theta,D2,Theta,I,Theta,P2);
axis([-1.5 1.5 0 1]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('D2(\theta)','I(\theta)','P2(\theta)');


subplot(3,1,3);
plot(Theta,D3,Theta,I,Theta,P3);
axis([-1.5 1.5 0 1]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('D3(\theta)','I(\theta)','P3(\theta)');

