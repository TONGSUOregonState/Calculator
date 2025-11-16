% I19FABRYAS

% Fabry-Perot Ring pattern in Transmission and Reflection depending on angle.

% ?ear normal incidence. Parameters: reflection coefficient, thickness d, refractive index
% and range of angles in Rad. All length in mm.

function I19FABRYAS;
% Delta = 2*pi/Lamda   2dn2 cos(Theta)
n2 = 1;
r = 0.9;
D = 0.01;
Lamda1 = 0.0005;
Lamda2=0.0005025;
Theta=(0:0.01:40);

g = (2*r)/(1-r^2);

IT = 1./(1+(g^2)*sin(2*(pi/Lamda1)*D*n2*cos(2*(pi/360)*Theta)).^2);
IIT = 1./(1+(g^2)*sin(2*(pi/Lamda2)*D*n2*cos(2*(pi/360)*Theta)).^2);

% Graph for transmission depending on angle for fixed ratio of D/Lamda
figure(1);
plot(Theta,IT,Theta,IIT);
axis([0 40 0 1]);
xlabel('\theta');
legend('IT(\theta)','IIT(\theta)');
title('Graph for transmission depending on angle for fixed ratio of D/\lambda');
