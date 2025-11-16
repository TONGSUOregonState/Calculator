% O5METALS Calculation of n and K for Copper using the Drude model. 
% Calculation of real and imaginary part.
% Expression for low and high frequencies depending on angular frequency.
% 1. General Expression
function O5METALS;
c = 3e8; 
Sigma = 6e7; % (OHM m)^-1
Epsilono = 8.85e-12; %C^2/Nm
Tau = 1/4.1e11; %sec

% Angular frequency for 1mm wavelength is 2pi*300*10^9 see below
Omega = linspace(1e11,1e18,5000);
%Omega = (1e11:1e11:1e18);

% The general expression for n+iK=zM(Omega)
zm = sqrt(1+((i*Sigma)./(Epsilono*Omega)).*(1./(1-i*Omega*Tau)));

figure(1);
subplot(4,1,1);
loglog(Omega,real(zm))
axis([1e11 1e18 1e-4 1e5]);
xlabel('\omega');
legend('real(zm(\omega))');

subplot(4,1,2);
loglog(Omega,imag(zm))
axis([1e11 1e18 1e-13 1e5]);
xlabel('\omega');
legend('imag(zm(\omega))');

%2. High frequency limit

nh = 1 - Sigma./(Epsilono*(Omega.^2)*Tau);

subplot(4,1,3);
semilogx(Omega,nh,Omega,real(zm))
axis([1e14 1e18 -1 1.1]);
xlabel('\omega');
legend('nh(\omega)','real(zm(\omega))');

% 3. Low frequency limit

n1 = sqrt(Sigma./(2*Epsilono*Omega));

subplot(4,1,4);
semilogx(Omega,n1,Omega,real(zm));
axis([1e11 1e14 0 6e3]);
xlabel('\omega');
legend('n1(\omega)','real(zm(\omega))');


% frequency
% 3e11 is 1mm
% 3e14 is 1micron
% 3e17 is 1nm is 10A
% 1e11 is 3mm
% 1e14 is 3micron
% 1e17 is 3nm is 30A

% angular frequency
% 1e11 is 3/(2pi) =0.477 mm
% 1e14 is 0.477 micron
% 1e17 is 0.477 nm is 47A
