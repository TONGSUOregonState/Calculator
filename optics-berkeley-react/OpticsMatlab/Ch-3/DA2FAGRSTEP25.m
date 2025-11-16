% DA2FAGRSTEP2S
% Diffraction on an step grating with width d, center to center distance of steps a,
% height H, two wavelength ?1 and ????2 for 0th and first order, distance from grating to
% screen X and coordinate on screen Y.
% All distances and wavelength in mm, number of lines N .Normal incidence.
% All parameters are globally defined above the graph.
% D(?) is the diffraction factor, I(?) is the interference factor, normalized to 1.
% II(?) is the interference factor of the gratings with respect to the two planes.
% P(A) is the product of Interference and diffraction factors.
% The intensity of the zeroth order and of the first orders change depending on the heigth H.
% If H is a multiple of ?, all light is in the zero order, if H is a multiple of ?/2, all light is in
% the first order.

function DA2FAGRSTEP2S;

Theta = (-0.7001:0.0002:0.7);
d = 0.001;
a = 0.002;
N = 6;
Lamda1 = 0.0007;
Lamda2 = 0.0005;
n1 = 1;
n2 = 0.5;
H = 0.00035;
H1 = n1*Lamda1;
H2 = n1*Lamda2;
H3 = n2*Lamda1;
H4 = n2*Lamda2;


D1 = (sin(pi*(d/Lamda1)*sin(Theta))./(pi*(d/Lamda1)*sin(Theta))).^2;
D2 = (sin(pi*(d/Lamda2)*sin(Theta))./(pi*(d/Lamda2)*sin(Theta))).^2;
D3 = D1;
D4 = D2;

I1 = (sin(pi*(a/Lamda1)*sin(Theta)*N)./(N*sin(pi*(a/Lamda1)*sin(Theta)))).^2;
I2 = (sin(pi*(a/Lamda2)*sin(Theta)*N)./(N*sin(pi*(a/Lamda2)*sin(Theta)))).^2;
I3 = I1;
I4 = I2;

II1 = (cos((pi/Lamda1)*(d*sin(Theta)+H1))).^2;
II2 = (cos((pi/Lamda2)*(d*sin(Theta)+H2))).^2;
II3 = (cos((pi/Lamda1)*(d*sin(Theta)+H3))).^2;
II4 = (cos((pi/Lamda2)*(d*sin(Theta)+H4))).^2;

P1 = D1.*I1.*II1;
P2 = D2.*I2.*II2;
P3 = D1.*I1.*II3;
P4 = D2.*I2.*II4;

figure(1);
subplot(2,1,1);
plot(Theta,P1,Theta,P2,Theta,D1,Theta,D2);
axis([-0.8 0.8 0 1]);                  % PLOTS LIMITS                    
xlabel('\theta','Fontsize',12);
legend('P1(\theta)','P2(\theta)','D1(\theta)','D2(\theta)');

subplot(2,1,2);
plot(Theta,P3,Theta,P4,Theta,D3,Theta,D4);
axis([-0.8 0.8 0 1]);                  % PLOTS LIMITS                    
xlabel('\theta','Fontsize',12);
legend('P3(\theta)','P4(\theta)','D3(\theta)','D4(\theta)');