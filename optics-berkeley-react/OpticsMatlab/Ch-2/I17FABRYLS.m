% I17FABRYLS

% Fabry-Perot Transmission depending on wavelength. 
% ?ormal incidence. Parameters: reflection coefficient, thickness D, refractive index.
% All length in mm.
% See for global definition.The finess ?g/2 is ?/ ??.
function I17FABRYLS;
% Delta = 2*pi/Lamda   2D (n2) cos(Theta2)
n2 = 1;
r1 = 0.7;
r2 = 0.9;
r3 = 0.97;
D = 0.0025;
Lamda = (0.0004:0.000001:0.0008);


g1 = (2*r1)/(1-r1^2);
g2 = (2*r2)/(1-r2^2);
g3 = (2*r1)/(1-r3^2);

IT1 = 1./(1+(g1^2)*((sin(2*(pi./Lamda)*D*n2)).^2));
IT2 = 1./(1+(g2^2)*((sin(2*(pi./Lamda)*D*n2)).^2));
IT3 = 1./(1+(g3^2)*((sin(2*(pi./Lamda)*D*n2)).^2));

figure(1);
plot(Lamda,IT1,Lamda,IT2,Lamda,IT3);
axis([3.5e-4 8e-4 0 1]);
xlabel('\lambda');
legend('IT1(\lambda)','IT2(\lambda)','IT3(\lambda)');
