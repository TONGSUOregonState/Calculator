% O7REFNKS
% The reflectance R is plotted for normal incidence for fixed
% n depending on K.
function O7REFNKS;

Theta = 0;
n1 = 1;
n2 = 10;
K = logspace(-3,2,100);
z = (((n2-i*K)/n1)*cos(2*(pi/360)*Theta)- sqrt(1-((n1./(n2-i*K))*sin(2*(pi/360)*Theta)).^2))./(((n2-i*K)/n1)*cos(2*(pi/360)*Theta)+ sqrt(1-((n1./(n2-i*K))*sin(2*(pi/360)*Theta)).^2));

R = z.*conj(z);
figure(1);
plot(K,R);
axis([0 100 0.6 1]);
xlabel('K');
legend('R(K)');