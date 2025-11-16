% M5FRINTN2L

% Fresnel's formulas as function of angle of incidence for n1<n2
% for Rp = rp^2, Rs = rs^2, and Tp = 1- Rp, Ts = 1-Rs

% 1. Amplitude reflection coefficients.

function M5FRINTN2L;
n1 = 1;
n2 = 1.5;
Theta = (0:0.4:90);

rp = ((n2/n1)*cos(2*(pi/360)*Theta)-sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2))./((n2/n1)*cos(2*(pi/360)*Theta)+sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));
rs = (cos(2*(pi/360)*Theta)-(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2))./(cos(2*(pi/360)*Theta)+(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));

% 2. Reflection: Intensities

Rp = rp.^2;
Rs = rs.^2;

figure(1);
subplot(2,2,1);
plot(Theta,rp.^2);
axis([0 100 0 1]);                  % PLOTS LIMITS                    
xlabel('\theta');
title('p - case');
legend('rp(\theta)^2');

subplot(2,2,2);
plot(Theta,rs.^2);
axis([0 100 0 1]);                  % PLOTS LIMITS                    
xlabel('\theta');
title('s - case');
legend('rs(\theta)^2');

% 3. Transmission: Intensities

Tp = 1 - Rp;
Ts = 1 - Rs;

subplot(2,2,3);
plot(Theta,Tp);
axis([0 100 0 1]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('Tp(\theta)');

subplot(2,2,4);
plot(Theta,Ts);
axis([0 100 0 1]);                  % PLOTS LIMITS                    
xlabel('\theta');
legend('Ts(\theta)');
