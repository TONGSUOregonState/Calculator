% I18FABRYRDS

% Fabry-Perot Ring pattern in Transmission and Reflection depending on
% angle.

% ?ear normal incidence. Parameters: reflection coefficient, thickness d,
% refractive index
% and range of angles in Rad. All length in mm.

function I18FABRYRDS;
r = 0.7;
Lamda1 = 0.0005;
Lamda2 = 0.0006;
g = (2*r)/(1-r^2);
D = (0:0.00001:0.001);
IT = 1./(1+(g^2)*(sin(2*(pi/Lamda1)*D).^2));
IIT = 1./(1+(g^2)*(sin(2*(pi/Lamda2)*D).^2));

% Graph for transmission depending on angle for fixed ratio of D/l
figure(1);
plot(D,IT,D,IIT);
axis([0 0.001 0 1]);
xlabel('D');
legend('IT(D)','IIT(D)');
