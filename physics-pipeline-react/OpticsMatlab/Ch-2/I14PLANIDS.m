% I14PLANIDS

% Normal incidence. Plane parallel plate, reflected and transmitted intensity
% depending on thickness for fixed wavelength.
% The reflection coefficients are calculated from Fresnels formulas for ? = 0
% Refractive indices n1, n2 and n3 may all be different and the reflection coefficient
% for both surfaces are calculated.
% The calculation of the fringe pattern is done depending on D for fixed ?, .

function I14PLANIDS;
% Delta = 2*pi/Lamda   2dn2
Theta1 = 1;
n1 = 1;
n2 = 1.5;
n3 = 1;
% Delta = 2*pi/Lamda   2dn2
r12 = (n2 - n1)/(n2+n1) %r12 = 0.2;
r23 = (n3 - n2)/(n3+n2) %r23 = -0.2
Lamda = 0.0005;
D = (0.0002:0.00001:0.002);
IT = ((1-r12^2)*(1-r23^2))./(1+(r12*r23)^2-(2*r12*r23)*cos(4*pi*(D/Lamda)*n2));
IR = 1 - IT;

figure(1);
subplot(1,2,1);
plot(D,IT);
axis([0 0.002 0 1]);
xlabel('D');
legend('IT(D)');
title('Transmitted Pattern');
subplot(1,2,2);
plot(D,IR);
axis([0 0.002 0 1]);
xlabel('D');
legend('IR(D)');
title('Reflected Pattern');



