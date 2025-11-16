% L1RJEANS
% The Raleigh Jeans law gives the emitted radiation as Energy/frequency interval
% and per volume.It is given here as Ws/{(1/s)m^3}

function LIRJEANS;
v = (5e14:-0.01e14:1e12);
c = 3e8;
k = 1.38e-23
T = 1000;

y = 8*pi*k*T*(v.^2)/(c^3);
figure(1);
plot(v,y);
axis([0 5e14 0 3e-15]);                  % PLOTS LIMITS                    
xlabel('v');
legend('y(v)');

% Frequency
% 1e11 is 3mm
% 1e14 is 3micron
% 1e17 is 3nm is 30A
% 3e11 is 1mm   
% 3e14 is 1micron
% 3e17 is 1nm is 10A

