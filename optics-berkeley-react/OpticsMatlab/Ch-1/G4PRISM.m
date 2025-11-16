% G4PRISM

% Graph of the angle of deviation for refraction on a prism
% depending on the angle of incidence

% ?1 is the angle of incidence with respect to the normal
% ?1 is the angle of deviation
% n is the refractive index and A is the apex angle.

function G4PRISM;
Theta1 = (0:0.001:1);
n = 2;
A = ((2*pi)/360)*30;
Delta = Theta1+ asin(sqrt(n^2-(sin(Theta1)).^2)*sin(A)-sin(Theta1)*cos(A))-A;

figure(1);
plot(Theta1,Delta);
axis([0 1 0.4 1.2]);
xlabel('\theta1');
legend('\delta(\theta1)');