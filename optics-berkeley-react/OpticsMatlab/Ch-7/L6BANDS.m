% L6BANDS
% Lorentian Line shape
function L6BANDS;
% Frequency interval
m=11;

Omega0 = 49/(2^m-1);

OmegaStep = 1/(2^m-1);
Omega = (OmegaStep:OmegaStep:1);
Tau = 1000;

g1 = 2*((1/(2*Tau))./((1/((2*Tau)^2))+(Omega-Omega0).^2));
Q = Tau*Omega0
% Q = 23.937

figure(1);
plot(Omega,g1);
axis([0 0.04 0 4000]);                  % PLOTS LIMITS                    
xlabel('\omega');
legend('g1(\omega)');