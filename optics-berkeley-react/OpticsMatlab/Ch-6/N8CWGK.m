% N8CWGK
% Dielectric circular waveguide, determination of k
% 1. Check for positive values of argument for J0, J1 and K0, K1
function N8CWGK;
%Input Data: radius, wavelength and refractive
% indices
a = 3;
Lamda = 2.39;
n1 = 1.5;
no =1;


% We try the interval 
k = (2.65:0.01:3.8);


% Since x = (?a)^2 and y= (?a)^2
% We have for the square of the arguments of the Bessel functions
xx = (a^2)*(((n1^2)*4*pi^2)/(Lamda^2)-k.^2);
yy = (a^2)*(k.^2-((no^2)*4*pi^2)/(Lamda^2));

x = sqrt(xx);
y = sqrt(yy);

figure(1);
subplot(2,1,1);
plot(k,x,k,y);
axis([2.6 3.8 0 20]);                  % PLOTS LIMITS                    
xlabel('k');
legend('x(k)','y(k)');

subplot(2,1,2);
plot(k,-besselj(1,x)./(x.*besselj(0,x)),k,besselk(1,y)./(y.*besselk(0,y)));
axis([2.6 3.8 -40 10]);                  % PLOTS LIMITS                    
xlabel('k');
legend('-besselj(1,x)/(x*besselj(0,x))','besselk(1,y)/(y*besselk(0,y))');


% From graph: First intersection
kk = 2.66;
LamdaLamda = (2*pi)/kk
% LamdaLamda = 2.362;

% Side calculation. If
LamdaLamdaLamda = 8;
% we get
kkk = 2*pi/LamdaLamdaLamda
% and kkk = 0.785
