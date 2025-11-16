% L5WienS
% Wien's displacement Law
% Graphs of Wien's displacement Law T = 0 to 8000

% Temperature in Kelvin
% Wavelength in meter
function L5WIENS;
T = (100:1:8000);
Lamda = (1./T)*2.89e-6;

figure(1);
subplot(2,1,1);
semilogy(T,Lamda);
axis([0 8000 1e-10 1e-7]);                  % PLOTS LIMITS                    
xlabel('T');
legend('\lambda(T)');

% Graphs of Wien's displacement Law T = 0 to 500
TT = (10:1:500);
LamdaLamda = (1./TT)*2.89e-6;

subplot(2,1,2);
semilogy(TT,LamdaLamda);
axis([0 500 1e-9 1e-6]);                  % PLOTS LIMITS                    
xlabel('T');
legend('\lambda\lambda(TT)');

