% M2FRN2L
% Fresnel's formulas as function of angle of incidence for first medium 1 and
% second medium 2 and n1<n2.
% .
% 1. Reflection coefficients.
% Absolute value and imaginary parts for p-case and s-case.
function M2FRN2L;
Theta = (0.1:0.1:90);
n1 = 1;
n2 = 1.5;

rp = ((n2/n1)*cos(2*(pi/360)*Theta)-sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2))./((n2/n1)*cos(2*(pi/360)*Theta)+sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));
rs = (cos(2*(pi/360)*Theta)-(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2))./(cos(2*(pi/360)*Theta)+(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));

figure(1);
subplot(2,2,1);
plot(Theta,abs(rp));
axis([0 100 0 1]);                  % PLOTS LIMITS                    
xlabel('\theta');
title('p - case');
legend('abs(rp(\theta))');

subplot(2,2,2);
plot(Theta,abs(rs));
axis([0 100 0 1]);                  % PLOTS LIMITS                    
xlabel('\theta');
title('s - case');
legend('abs(rs(\theta))');

subplot(2,2,3);
plot(Theta,angle(rp));
axis([0 100 -4 4]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('angle(rp(\theta))');


subplot(2,2,4);
plot(Theta,angle(rs));
axis([0 100 -4 4]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('angle(rs(\theta))');

% 2. Transimission coefficient.
% Absolute value and imaginary value part for p-case and s-case.

tp = (2*cos(2*(pi/360)*Theta))./((n2/n1)*cos(2*(pi/360)*Theta)+sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));
ts = (2*cos(2*(pi/360)*Theta))./(cos(2*(pi/360)*Theta)+(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));

figure(2);
subplot(2,2,1);
plot(Theta,abs(tp));
axis([0 100 0 1]);                  % PLOTS LIMITS                    
xlabel('\theta');
title('p - case');
legend('abs(tp(\theta))');

subplot(2,2,2);
plot(Theta,abs(ts));
axis([0 100 0 1]);                  % PLOTS LIMITS                    
xlabel('\theta');
title('s - case');
legend('abs(ts(\theta))');

subplot(2,2,3);
plot(Theta,angle(tp));
axis([0 100 -2 3]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('angle(tp(\theta))');

subplot(2,2,4);
plot(Theta,angle(ts));
axis([0 100 -2 3]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('angle(ts(\theta))');

