% O2FRSOPS Graphs of Ratios of reflection coefficients
% Reflection coefficients of Fresnel's formulas as function of angle
% of incidence for n and K. Real part and ratios of real parts are plotted.
% Refractive indices, K values, and ? are globally defined at the graphs.

% Complex zrp, zzrp, zzzrp for parallel and
% zrs, zzrs, zzzrs for perpendicular case.

function O2FRSOPS;
K = 0.1;
KK = 0.5;
KKK = 2;
n1 = 1;
n2 = 1.5;
nn2 = 3;
Theta = (0:1:90);
% K = 0


zrp0 = ((n2/n1)*cos(2*(pi/360)*Theta)-sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2))./((n2/n1)*cos(2*(pi/360)*Theta)+sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));
zrs0 = (cos(2*(pi/360)*Theta)-(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2))./(cos(2*(pi/360)*Theta)+(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));

% K not 0

zrp = (((n2 -i*K)/n1)*cos(2*(pi/360)*Theta)-sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2))./(((n2 -i*K)/n1)*cos(2*(pi/360)*Theta)+sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2));
zrs = (cos(2*(pi/360)*Theta)-((n2-i*K)/n1)*sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2))./(cos(2*(pi/360)*Theta)+((n2-i*K)/n1)*sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2));

% For differen n and K

zzrp = (((nn2 -i*KK)/n1)*cos(2*(pi/360)*Theta)-sqrt(1-((n1/(nn2-i*KK))*sin(2*(pi/360)*Theta)).^2))./(((nn2 -i*KK)/n1)*cos(2*(pi/360)*Theta)+sqrt(1-((n1/(nn2-i*KK))*sin(2*(pi/360)*Theta)).^2));
zzrs = (cos(2*(pi/360)*Theta)-((nn2-i*KK)/n1)*sqrt(1-((n1/(nn2-i*KK))*sin(2*(pi/360)*Theta)).^2))./(cos(2*(pi/360)*Theta)+((nn2-i*KK)/n1)*sqrt(1-((n1/(nn2-i*KK))*sin(2*(pi/360)*Theta)).^2));
zzzrp = (((nn2 -i*KKK)/n1)*cos(2*(pi/360)*Theta)-sqrt(1-((n1/(nn2-i*KKK))*sin(2*(pi/360)*Theta)).^2))./(((nn2 -i*KKK)/n1)*cos(2*(pi/360)*Theta)+sqrt(1-((n1/(nn2-i*KKK))*sin(2*(pi/360)*Theta)).^2));
zzzrs = (cos(2*(pi/360)*Theta)-((nn2-i*KKK)/n1)*sqrt(1-((n1/(nn2-i*KKK))*sin(2*(pi/360)*Theta)).^2))./(cos(2*(pi/360)*Theta)+((nn2-i*KKK)/n1)*sqrt(1-((n1/(nn2-i*KKK))*sin(2*(pi/360)*Theta)).^2));

figure(1);
subplot(3,2,1);
plot(Theta,real(zrp0),Theta,real(zrp),Theta,real(zzrp),Theta,real(zzzrp));
axis([0 100 -1 1]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('real(zrp0(\theta))','real(zrp(\theta))','real(zzrp(\theta))','real(zzzrp(\theta))');

subplot(3,2,2);
plot(Theta,real(zrs0),Theta,real(zrs),Theta,real(zzrs),Theta,real(zzzrs));
axis([0 100 -1 1]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('real(zrs0(\theta))','real(zrs(\theta))','real(zzrs(\theta))','real(zzzrs(\theta))');

% Ratio: p/s

subplot(3,1,2);
plot(Theta,real(zrp0)./real(zrs0),Theta,real(zrp)./real(zrs),Theta,real(zzrp)./real(zzrs),Theta,real(zzzrp)./real(zzzrs));
axis([0 100 -1 1]);                  % PLOTS LIMITS                    
xlabel('\theta');

legend('real(zrp0(\theta))/real(zrs0(\theta))','real(zrp(\theta))/real(zrs(\theta))','real(zzrp(\theta))/real(zzrs(\theta))','real(zzzrp(\theta))/real(zzzrs(\theta))');

% Ratio: s/p

subplot(3,1,3);
plot(Theta,real(zrs0)./real(zrp0),Theta,real(zrs)./real(zrp),Theta,real(zzrs)./real(zzrp),Theta,real(zzzrs)./real(zzzrp));
axis([0 100 -300 200]);                  % PLOTS LIMITS                    
xlabel('\theta');

legend('real(zrs0(\theta))/real(zrp0(\theta))','real(zrs(\theta))/real(zrp(\theta))','real(zzrs(\theta))/real(zzrp(\theta))','real(zzzrs(\theta))/real(zzzrp(\theta))');

