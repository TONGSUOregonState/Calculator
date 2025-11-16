% O1FRNKPSS
% Complex reflection coefficients of Fresnel' formulas as function of angle
% of incidence for values of n2 and K.

% Absolute value and imaginary parts are plotted.

% n1, n2, K and ? are globally defined at the graphs.
% Complex reflection coefficients zrp for parallel and zrs for perpendicular case.

function O1FRNKPSS;
Theta = (0:1:90);
K = 2;
n1 = 1;
n2 = 1.5;

zrp = (((n2-i*K)/n1)*cos(2*(pi/360)*Theta)-sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2))./(((n2-i*K)/n1)*cos(2*(pi/360)*Theta)+sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2));
zrs = (cos(2*(pi/360)*Theta)-((n2-i*K)/n1)*sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2))./(cos(2*(pi/360)*Theta)+((n2-i*K)/n1)*sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2));


figure(1);
subplot(2,1,1);
plot(Theta,abs(zrp),Theta,abs(zrs));
axis([0 100 -1 1]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('abs(zrp(\theta))','abs(zrs(\theta))');

subplot(2,1,2);
plot(Theta,angle(zrp),Theta,angle(zrs));
axis([0 100 -3.5 3.5]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('angle(zrp(\theta))','angle(zrs(\theta))');
