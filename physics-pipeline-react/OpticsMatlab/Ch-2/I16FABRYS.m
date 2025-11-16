% I16FABRYS
% Fabry-Perot Transmission depending on D.
% ?ormal incidence. Parameters: reflection coefficient, wavelength ?, refractive index.
% See for global definition.The finess ?g/2 is ?/ ??. All length in mm.
function I16FABRYS;
% Delta = 2*pi/Lamda   2D (n2) cos(Theta2)
D = (0:0.001:0.11);
n2 = 1;
Lamda = 0.1;
r1 = 0.7
r2 = 0.9
r3 = 0.97;
g1 = (2*r1)/(1-r1^2);
g2 = (2*r2)/(1-r2^2);
g3 = (2*r1)/(1-r3^2);

IT1 = 1./(1+(g1^2)*((sin(2*(pi/Lamda)*D*n2)).^2));
IT2 = 1./(1+(g2^2)*((sin(2*(pi/Lamda)*D*n2)).^2));
IT3 = 1./(1+(g3^2)*((sin(2*(pi/Lamda)*D*n2)).^2));

figure(1);
plot(D,IT1,D,IT2,D,IT3);
axis([0 0.12 0 1]);
xlabel('D');
legend('IT1(D)','IT2(D)','IT3(D)');
