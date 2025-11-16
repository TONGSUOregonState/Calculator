% O6SKINS Skin Depth
% 1. Skin depth (in meters) for intensity depending on frequency

function O6SKINS;

Epsilono = 8.85e-12 % C^2/Nm
c = 3e8;
Omega = logspace(10,14,100);
Sigma = 6e7;

One = sqrt((Epsilono*c^2)./(2*Omega*Sigma)); % in meter

figure(1);
subplot(2,1,1);
plot(Omega,One)
axis([0 1e14 0 10e-8]);
xlabel('\omega');
legend('I(\omega)');

% 2. Skin depth (in meters) for intensity depending on wavelength
% ( for checking:For 1 mm wavelength angular frequency is 2?*300* 10^9)

Lamda = logspace(-9,-3,100);
One = sqrt((Epsilono*c*Lamda)/(4*pi*Sigma));

subplot(2,1,2);
semilogx(Lamda,One)
axis([1e-7 1e-3 0 6e-8]);
xlabel('\lambda');
legend('I(\lambda)');

% 1 10^-9 meter is 1 nm =.001 microns= 10A