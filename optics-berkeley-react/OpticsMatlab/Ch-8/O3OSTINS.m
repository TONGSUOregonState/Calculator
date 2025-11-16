% O3OSTINS Graphs of n and K
% 1. Dielectric Function for models with one oscillator in the infrared spectral
% region.
% The dielectric constant for high frequencies is set arbitrarily to ?inf = 20.
% The model parameters are S, ?1, ?o. We set z = n - iK
% S and ?1 are dimensionless,
% ?o in cm^-1 i
function O3OSTINS;
v = (900:1:1200);
S1 = 0.09;
Gamma1 = 0.02;
Epsiloninf = 20;
vo1 = 1050;
z1 = sqrt(Epsiloninf+ S1./(1-(v/vo1).^2-(Gamma1*v)/vo1));


figure(1);
subplot(3,1,1);
plot(v,real(z1));
axis([900 1200 -2 15]);                  % PLOTS LIMITS                    
xlabel('v');
legend('real(z1(v))');

subplot(3,1,2);
plot(v,imag(z1));
axis([900 1200 -2 22]);                  % PLOTS LIMITS                    
xlabel('v');
legend('imag(z1(v))');

% 2. For an optical thin medium with little absorption we have the following
% approximations. The parameters must be chosen such that n is close to
% 1 and K is small.

vv = (0:0.1:2);
a = 0.5e-5;
c = 1e-3;
n = 1 + a*((1-vv.^2)./((1-vv.^2).^2+(vv.^2)*c^2));
k = (a*(vv*c))./((1-vv.^2).^2+(vv.^2)*c^2);

subplot(3,2,5);
plot(vv,n);
axis([0 2 0.99995 1.00005]);                  % PLOTS LIMITS                    
xlabel('vv');
legend('n(vv)');

subplot(3,2,6);
plot(vv,k);
axis([0 2 0 0.006]);                  % PLOTS LIMITS                    
xlabel('vv');
legend('k(vv)');
