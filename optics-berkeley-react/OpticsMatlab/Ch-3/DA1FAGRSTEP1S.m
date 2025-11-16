% DA1FAGRSTEP1S
% Diffraction on an step grating with width d, center to center distance of steps a,
% height H, wavelength ????, distance from grating to screen X and coordinate on
% Screen Y. All distances and wavelength in mm, number of lines N .Normal incidence.
% All parameters are globally defined above the graph.
% D(?) is the diffraction factor, I(?) is the interference factor, normalized to 1.
% II(?) is the interfernce factor of the gratings with respect to the two planes.
% P(A) is the product of interference and diffraction factors.
% The intensity of the zeroth order and of the first orders change depending on the heigth H.
% If H is a multiple of ?, all light is in the zero order, if H is a multiple of ?/2, all light is in
% the first order.

function DA1FAGRSTEP1S;

Theta =(-0.5001:0.0002:0.5);
Lamda = 0.0005;

a = 0.002;
N = 6;
d = 0.001;
n1 = 10.25;
n2 = 10;
n3 = 10.37;
n4 = 10.5;
H1 = n1*Lamda;
H2 = n2*Lamda;
H3 = n3*Lamda;
H4 = n4*Lamda;


D = (sin(pi*(d/Lamda)*sin(Theta))./(pi*(d/Lamda)*sin(Theta))).^2;
I = (sin(pi*(a/Lamda)*sin(Theta)*N)./(N*sin(pi*(a/Lamda)*sin(Theta)))).^2;
II1 =  (cos((pi/Lamda)*(d*sin(Theta)+H1))).^2;
II2 =  (cos((pi/Lamda)*(d*sin(Theta)+H2))).^2;
II3 =  (cos((pi/Lamda)*(d*sin(Theta)+H3))).^2;
II4 =  (cos((pi/Lamda)*(d*sin(Theta)+H4))).^2;

P1 = D.*I.*II1;
P2 = D.*I.*II2;
P3 = D.*I.*II3;
P4 = D.*I.*II4;

figure(1);
plot(Theta,P1,Theta,P2,Theta,P3,Theta,P4,Theta,D);
axis([-1 1 0 1]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('P1(\theta)','P2(\theta)','P3(\theta)','P4(\theta)','D(\theta)');
