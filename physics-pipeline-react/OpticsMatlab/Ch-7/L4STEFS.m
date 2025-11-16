% L4STEFS

% The Stefan Boltzmann Law. The units are Power/area in Watt/m^2
% A linear and a logarithmic scale are used.
function L4STEFS;
h = 6.626e-34;
c = 3e8;
k = 1.38e-23;
T = (10:10:10000);
Sigma = (2/15)*(( (pi^5)*(k^4))/((c^2)*(h^3)))
% Sigma = 5.652e-8 kgs-3K-4
yT = Sigma*(T.^4);

% Linear y-scale
figure(1);
subplot(2,1,1);
plot(T,yT);
axis([0 1e4 0 6e8]);                  % PLOTS LIMITS                    
xlabel('T');
title('Linear y-scale');
legend('y(T)');

% Logarithmic y-scale
subplot(2,1,2);
semilogy(T,yT);
axis([0 1e4 1e-4 1e9]);                  % PLOTS LIMITS                    
xlabel('T');
title('Logarithmic y-scale');
legend('y(T)');