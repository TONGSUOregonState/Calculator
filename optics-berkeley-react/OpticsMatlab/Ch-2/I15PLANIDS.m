% I15PLANIDS
% Normal incidence. Plane parallel plate, reflected and transmitted intensity
% depending on wavelength for fisec thickness.
% The reflection coefficients are calculated from Fresnels formulas for ? = 0
% Refractive indices n1, n2 and n3 may all be different and the reflection coefficient
% for both surfaces are calculated.
% The calculation of the fringe pattern is done depending on ? for fixed D.
function I15PLANIDS;
% Delta = 2*pi/Lamda   2dn2
n1 = 1;
n2 = 1.5;
n3 = 1;
r12 = (n2-n1)/(n2+n1)   % r12 = 0.2;
r23 = (n3-n2)/(n3+n2)   % r23 = -0.2
% Delta = 2*pi/Lamda   2dn2
Lamda = (0.021:0.001:1);
D = 0.2;
IT = ((1-r12^2)*(1-r23^2))./(1+(r12*r23)^2-(2*r12*r23)*cos(4*pi*(D./Lamda)*n2));
IR = 1 - IT;

figure(1);
subplot(1,2,1);
plot(Lamda,IT);
axis([0 1 0 1]);
xlabel('\lambda');
legend('IT(\lambda)');
title('Transmitted Pattern');
subplot(1,2,2);
plot(Lamda,IR);
axis([0 1 0 1]);
xlabel('\lambda');
legend('IR(\lambda)');
title('Reflected Pattern');

